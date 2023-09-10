import {
  EVMWallet,
  State,
  SubstrateWallet,
  useEvmAccount,
  useSubstrateAccount,
} from "@wainola/react-wallet-manager";
import { reducer } from "./reducer";
import { useReducer } from "react";

export default function Widget() {
  const evmWallet = new EVMWallet();
  const substrateWallet = new SubstrateWallet();

  const initState: State = {
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
  }

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

  return (
    <div>
      <button onClick={handleConnnectEVM}>Connect EVM Wallet</button>

      <button onClick={handleConnectSubstrate}>Connect Substrate Wallet</button>

      <div>
        <p>EMV Account: {state.emvAccount.address}</p>
        <p>EMV Balance: {state.emvAccount.balance}</p>
      </div>

      <div>
        <p>Substrate Account: {state.substrateAccount.address}</p>
        <p>Substrate Balance: {state.substrateAccount.balance}</p>
      </div>
    </div>
  );
}
