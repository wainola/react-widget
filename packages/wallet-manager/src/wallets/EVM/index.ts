import { ethers,  } from "ethers";

class EvmWallet {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private metamask: any | undefined;
    private account: string | undefined;
    private provider: ethers.providers.Web3Provider | undefined;

    public connect() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof (window as any).ethereum !== "undefined") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.metamask = (window as any).ethereum;
            this.provider = new ethers.providers.Web3Provider(this.metamask);
        }
    }

    public async getAccount() {
        if (this.metamask) {
            const accounts = await this.metamask.request({ method: 'eth_requestAccounts' });
            this.account = accounts[0];
        }
    }

    public getSigner() {
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