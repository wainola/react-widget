import { ApiPromise } from '@polkadot/api';
declare class SubstrateWallet {
    private substrateAccount;
    api: ApiPromise | undefined;
    private wssProvider;
    connect(): Promise<void>;
    conntectToApi(): Promise<void>;
    get currentAccount(): string | undefined;
    get currentApi(): ApiPromise;
}
export default SubstrateWallet;
