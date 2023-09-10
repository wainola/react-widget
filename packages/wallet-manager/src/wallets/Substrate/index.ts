import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'

class SubstrateWallet {
    private substrateAccount: string | undefined;
    public api: ApiPromise | undefined;
    private wssProvider: WsProvider | undefined;

    async connect() {
        const injectors = await web3Enable('Polkadot Wallet');
        const polkadotInjector = injectors.find((injector) => injector.name === 'polkadot-js')
        if (polkadotInjector) {
            console.log('polkadot-js extension found');
            const allAccounts = await web3Accounts();
            this.substrateAccount = allAccounts[0].address;
        }
    }

    async conntectToApi() {
        this.wssProvider = new WsProvider('wss://rpc.polkadot.io');
        this.api = await ApiPromise.create({ provider: this.wssProvider });
    }

    get currentAccount() {
        return this.substrateAccount;
    }

    get currentApi(): ApiPromise {
        return this.api as ApiPromise
    }
}

export default SubstrateWallet;