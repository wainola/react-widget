import { EVMAssetTransfer, Environment, SubstrateAssetTransfer } from "@buildwithsygma/sygma-sdk-core";
import { useEffect } from "react";
export default function useSygma(state, dispatcher) {
    const createEvmAssetTransfer = async () => {
        const assetTransfer = new EVMAssetTransfer();
        await assetTransfer.init(state.evmWallet.currentProvider, Environment.TESTNET);
        return assetTransfer;
    };
    const createSubstrateAssetTransfer = async () => {
        const assetTransfer = new SubstrateAssetTransfer();
        await assetTransfer.init(state.substrateWallet.currentApi, Environment.TESTNET);
        return assetTransfer;
    };
    const getAssetTransfer = async () => {
        switch (state.from) {
            case "substrate": {
                const substrateAssetTransfer = await createSubstrateAssetTransfer();
                dispatcher({
                    type: "SET_SUBSTRATE_ASSET_TRANSFER",
                    payload: { substrateAssetTransfer }
                });
                break;
            }
            case "evm": {
                const evmAssetTransfer = await createEvmAssetTransfer();
                dispatcher({
                    type: "SET_EVM_ASSET_TRANSFER",
                    payload: { evmAssetTransfer }
                });
                break;
            }
        }
    };
    useEffect(() => {
        if (state.from) {
            getAssetTransfer();
        }
    }, [state.from]);
}
