import { useEffect } from "react";
import { Actions, State } from "../types";
import { formatBalance } from '@polkadot/util'

formatBalance.setDefaults({ unit: 'DOT' })

export default function useSubstrateAccount(
    state: State,
    dispatcher: React.Dispatch<Actions>,
) {
    const getSubstrateAccount = () => {
        if (state.substrateWallet) {
            dispatcher({
                type: "CONNECT_SUBSTRATE_WALLET",
                payload: { address: state.substrateWallet.currentAccount! }
            });
        }
    }

    const readStorage = async () => {
        await state.substrateWallet?.conntectToApi();

        const currentApi = state.substrateWallet?.currentApi;

        const { data: balance } = await currentApi?.query.system.account(state.substrateAccount.address) as any

        const chainDecimals = currentApi?.registry.chainDecimals[0]

        dispatcher({
            type: "GET_SUBSTRATE_BALANCE",
            payload: { balance: formatBalance(balance.free, { decimals: chainDecimals }) }
        });
    }

    useEffect(() => {
        if (state.substrateConnected === "connected") {
            getSubstrateAccount();
        }
    }, [state.substrateConnected]);

    useEffect(() => {
        if (state.substrateAccount.address) {
            readStorage();
        }
    }, [state.substrateAccount.address])
}
