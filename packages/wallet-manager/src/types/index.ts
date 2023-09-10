import { EVMAssetTransfer, SubstrateAssetTransfer } from "@buildwithsygma/sygma-sdk-core";
import EvmWallet from "../wallets/EVM";
import SubstrateWallet from "../wallets/Substrate";

export type State = {
  emvAccount: {
    address: string | null;
    balance: string | null;
  };
  substrateAccount: {
    address: string | null;
    balance: string | null;
  };
  evmConnected: "idle" | "connected";
  substrateConnected: "idle" | "connected";
  evmWallet: EvmWallet | null;
  substrateWallet: SubstrateWallet | null;
  evmAssetTransfer: EVMAssetTransfer | null;
  substrateAssetTransfer: SubstrateAssetTransfer | null;
  from: "evm" | "substrate" | null;
}

export type Actions =
  {
    type: 'CONNECT_EMV_WALLET',
    payload: {
      address: string;
    }
  }
  | {
    type: 'CONNECT_SUBSTRATE_WALLET',
    payload: {
      address: string;
    }
  }
  | {
    type: 'DISCONNECT_EMV_WALLET',
  }
  | {
    type: 'DISCONNECT_SUBSTRATE_WALLET',
  }
  | {
    type: 'GET_EMV_BALANCE',
    payload: {
      balance: string;
    }
  }
  | {
    type: 'GET_SUBSTRATE_BALANCE',
    payload: {
      balance: string;
    }
  }
  | {
    type: 'TOGGLE_EVM_CONNECTION_STATUS',
    payload: {
      status: "idle" | "connected";
      evmWallet: EvmWallet;
    }
  }
  | {
    type: 'TOGGLE_SUBSTRATE_CONNECTION_STATUS',
    payload: {
      status: "idle" | "connected";
      substrateWallet: SubstrateWallet;
    }
  }
  | {
    type: 'SET_SUBSTRATE_ASSET_TRANSFER',
    payload: {
      substrateAssetTransfer: SubstrateAssetTransfer;
    }
  }
  | {
    type: 'SET_EVM_ASSET_TRANSFER',
    payload: {
      evmAssetTransfer: EVMAssetTransfer;
    }
  }

  export enum WalletType {
    EVM = "evm",
    Substrate = "substrate"
  }