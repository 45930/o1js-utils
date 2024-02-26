import { PublicKey, PrivateKey, Mina } from 'o1js';
export { ONE_MICROMINA, ONE_MINA, randomAccount, Fee, Network, Transaction };
/**
 * The minimum unit of divisible token value on Mina
 */
declare const ONE_MICROMINA = 1;
/**
 * The value of 1 full Mina token
 */
declare const ONE_MINA = 1000000;
declare const randomAccount: () => {
    privateKey: PrivateKey;
    publicKey: PublicKey;
    publicKey58: string;
};
declare namespace Fee {
    const SM: number;
    const MD: number;
    const LG: number;
}
declare namespace Network {
    /**
     * Configuration for the Berkeley network
     *
     * Usage: Mina.Network(berkeleyConfig());
     *
     * @param {{
     * 		mina: string | string[];
     *		archive: string | string[];
     * }} config the mina graphQL endpoint(s) and the archive URL(s)
     *
     * @returns a valid Mina network config
     *
     */
    const berkeleyConfig: (config?: {
        mina: string | string[];
        archive: string | string[];
    }) => {
        mina: string | string[];
        archive: string | string[];
    };
    /**
     * Configuration for the Lightnet, see documentation here: https://docs.minaprotocol.com/zkapps/testing-zkapps-lightnet
     *
     * Usage: Mina.Network(lightnetConfig()); // remember to run zk lightnet start first!
     *
     * @param {{
     * 		mina: string | string[],
     *		archive: string | string[],
     *		lightnetAccountManager: string
     * }} config the mina graphQL endpoint(s), archive URL(s), and lightnet manager URL
     *
     * @returns a valid Mina network config
     *
     */
    const lightnetConfig: (config?: {
        mina: string | string[];
        archive: string | string[];
        lightnetAccountManager: string;
    }) => {
        mina: string | string[];
        archive: string | string[];
        lightnetAccountManager: string;
    };
}
declare namespace Transaction {
    /**
     * Wraps the callback in a Mina Transaction and accepts parameters defining whether
     * the transaction should be signed and/or proved
     *
     * @param cb callback function to execute within the Transaction
     * @param sender PublicKey of the sender account
     * @param fee fee for the tx, defaults Fee.MD
     * @param {{
     * 		shouldSign: boolean,
     * 		shouldProve: boolean,
     * 		shouldSend: boolean,
     * 		signers?: PrivateKey[]
     * }} config object defining what to do with the transaction after generating it
     *
     */
    const execute: (cb: Function, sender: PublicKey, fee?: number, config?: {
        shouldSign: boolean;
        shouldProve: boolean;
        shouldSend: boolean;
        signers?: PrivateKey[];
    }) => Promise<Mina.Transaction>;
}
