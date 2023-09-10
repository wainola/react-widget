import { ethers } from "ethers";
declare class EvmWallet {
    private metamask;
    private account;
    private provider;
    connect(): void;
    getAccount(): Promise<void>;
    getSigner(): ethers.providers.JsonRpcSigner | undefined;
    get currentAccount(): string | undefined;
    get currentProvider(): ethers.providers.Web3Provider | undefined;
}
export default EvmWallet;
