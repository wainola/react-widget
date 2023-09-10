import { ethers, } from "ethers";
class EvmWallet {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "metamask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "account", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "provider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    connect() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof window.ethereum !== "undefined") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.metamask = window.ethereum;
            this.provider = new ethers.providers.Web3Provider(this.metamask);
        }
    }
    async getAccount() {
        if (this.metamask) {
            const accounts = await this.metamask.request({ method: 'eth_requestAccounts' });
            this.account = accounts[0];
        }
    }
    getSigner() {
        if (this.provider) {
            return this.provider.getSigner();
        }
    }
    get currentAccount() {
        return this.account;
    }
    get currentProvider() {
        return this.provider;
    }
}
export default EvmWallet;
