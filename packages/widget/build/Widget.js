import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EVMWallet, SubstrateWallet, useEvmAccount, useSubstrateAccount, } from "@wainola/react-wallet-manager";
import { reducer } from "./reducer";
import { useReducer } from "react";
export default function Widget() {
    const evmWallet = new EVMWallet();
    const substrateWallet = new SubstrateWallet();
    const initState = {
        emvAccount: {
            address: null,
            balance: null,
        },
        substrateAccount: {
            address: null,
            balance: null,
        },
        evmConnected: "idle",
        substrateConnected: "idle",
        evmWallet,
        substrateWallet,
        evmAssetTransfer: null,
        substrateAssetTransfer: null,
        from: null,
    };
    const [state, dispatcher] = useReducer(reducer, initState);
    useEvmAccount(state, dispatcher);
    useSubstrateAccount(state, dispatcher);
    const handleConnnectEVM = () => {
        evmWallet.connect();
        dispatcher({
            type: "TOGGLE_EVM_CONNECTION_STATUS",
            payload: {
                status: "connected",
                evmWallet,
            },
        });
    };
    const handleConnectSubstrate = async () => {
        await substrateWallet.connect();
        dispatcher({
            type: "TOGGLE_SUBSTRATE_CONNECTION_STATUS",
            payload: {
                status: "connected",
                substrateWallet,
            },
        });
    };
    return (_jsxs("div", { children: [_jsx("button", { onClick: handleConnnectEVM, children: "Connect EVM Wallet" }), _jsx("button", { onClick: handleConnectSubstrate, children: "Connect Substrate Wallet" }), _jsxs("div", { children: [_jsxs("p", { children: ["EMV Account: ", state.emvAccount.address] }), _jsxs("p", { children: ["EMV Balance: ", state.emvAccount.balance] })] }), _jsxs("div", { children: [_jsxs("p", { children: ["Substrate Account: ", state.substrateAccount.address] }), _jsxs("p", { children: ["Substrate Balance: ", state.substrateAccount.balance] })] })] }));
}
