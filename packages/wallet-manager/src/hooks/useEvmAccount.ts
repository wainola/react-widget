import { useEffect } from "react";
import { Actions, State } from "../types"
import { ethers } from "ethers";

export default function useEvmAccount(
  state: State,
  dispatcher: React.Dispatch<Actions>,
) {
  const getEvmAccount = async () => {
    if (state.evmWallet) {
      await state.evmWallet.getAccount();
      if (state.evmWallet.currentAccount) {
        dispatcher({
          type: "CONNECT_EMV_WALLET",
          payload: { address: state.evmWallet.currentAccount }
        });
      }
    }
  }

  const getEvmBalance = async () => {
    const balance = await state.evmWallet!.currentProvider?.getBalance(state.emvAccount.address!);

    dispatcher({
      type: "GET_EMV_BALANCE",
      payload: { balance: ethers.utils.formatEther(balance!) }
    });
  }

  useEffect(() => {
    if (state.evmConnected === "connected") {
      getEvmAccount();
    }
  }, [state.evmConnected]);


  useEffect(() => {
    if (state.emvAccount.address && state.emvAccount.balance === null) {
      getEvmBalance();
    }
  }, [state.emvAccount]);

}