export const reducer = (state, action) => {
    switch (action.type) {
        case 'CONNECT_EMV_WALLET':
            return {
                ...state,
                emvAccount: {
                    ...state.emvAccount,
                    address: action.payload.address,
                },
            };
        case 'CONNECT_SUBSTRATE_WALLET':
            return {
                ...state,
                substrateAccount: {
                    ...state.substrateAccount,
                    address: action.payload.address,
                },
            };
        case 'DISCONNECT_EMV_WALLET':
            return {
                ...state,
                emvAccount: {
                    ...state.emvAccount,
                    address: null,
                },
            };
        case 'DISCONNECT_SUBSTRATE_WALLET':
            return {
                ...state,
                substrateAccount: {
                    ...state.substrateAccount,
                    address: null,
                },
            };
        case 'GET_EMV_BALANCE':
            return {
                ...state,
                emvAccount: {
                    ...state.emvAccount,
                    balance: action.payload.balance,
                },
            };
        case 'GET_SUBSTRATE_BALANCE':
            return {
                ...state,
                substrateAccount: {
                    ...state.substrateAccount,
                    balance: action.payload.balance,
                },
            };
        case 'TOGGLE_EVM_CONNECTION_STATUS':
            return {
                ...state,
                evmConnected: action.payload.status,
                evmWallet: action.payload.evmWallet,
            };
        case 'TOGGLE_SUBSTRATE_CONNECTION_STATUS':
            return {
                ...state,
                substrateConnected: action.payload.status,
                substrateWallet: action.payload.substrateWallet,
            };
        case 'SET_SUBSTRATE_ASSET_TRANSFER':
            return {
                ...state,
                substrateAssetTransfer: action.payload.substrateAssetTransfer,
            };
        case 'SET_EVM_ASSET_TRANSFER':
            return {
                ...state,
                evmAssetTransfer: action.payload.evmAssetTransfer,
            };
        default:
            return state;
    }
};
