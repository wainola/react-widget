import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
class SubstrateWallet {
    constructor() {
        Object.defineProperty(this, "substrateAccount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wssProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    async connect() {
        const injectors = await web3Enable('Polkadot Wallet');
        const polkadotInjector = injectors.find((injector) => injector.name === 'polkadot-js');
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
    get currentApi() {
        return this.api;
    }
}
export default SubstrateWallet;
