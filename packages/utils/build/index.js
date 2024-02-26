export { ONE_MICROMINA, ONE_MINA, Fee, Network };
/**
 * The minimum unit of divisible token value on Mina
 */
const ONE_MICROMINA = 1;
/**
 * The value of 1 full Mina token
 */
const ONE_MINA = 1000000;
var Fee;
(function (Fee) {
    Fee.SM = ONE_MINA * 0.001;
    Fee.MD = ONE_MINA * 0.01;
    Fee.LG = ONE_MINA * 0.1;
})(Fee || (Fee = {}));
var Network;
(function (Network) {
    const DEFAULT_BERKELEY_MINA_URLS = [
        'https://berkeley.minascan.io/graphql',
        'https://proxy.berkeley.minaexplorer.com/graphql'
    ];
    const DEFAULT_BERKELEY_ARCHIVE_URL = 'https://archive.berkeley.minaexplorer.com/';
    /**
     * Configuration for the Berkeley network
     *
     * Usage: Mina.Network(berkeleyConfig());
     *
     * @param mina mina graphQL endpoint(s)
     * @param archive mina archive node URL(s)
     *
     * @returns a valid Mina network config
     *
     */
    Network.berkeleyConfig = ({ mina = DEFAULT_BERKELEY_MINA_URLS, archive = DEFAULT_BERKELEY_ARCHIVE_URL }) => {
        return { mina, archive };
    };
    const DEFAULT_LIGHTNET_MINA_URL = 'http://localhost:8080/graphql';
    const DEFAULT_LIGHTNET_ARCHIVE_URL = 'http://localhost:8282';
    const DEFAULT_LIGHTNET_MANAGER_URL = 'http://localhost:8181';
    /**
     * Configuration for the Lightnet, see documentation here: https://docs.minaprotocol.com/zkapps/testing-zkapps-lightnet
     *
     * Usage: Mina.Network(lightnetConfig()); // remember to run zk lightnet start first!
     *
     * @param mina mina graphQL endpoint(s)
     * @param archive mina archive node URL(s)
     * @param lightnetAccountManager Lightnet account manager URL
     *
     * @returns a valid Mina network config
     *
     */
    Network.lightnetConfig = ({ mina = DEFAULT_LIGHTNET_MINA_URL, archive = DEFAULT_LIGHTNET_ARCHIVE_URL, lightnetAccountManager = DEFAULT_LIGHTNET_MANAGER_URL }) => {
        return { mina, archive, lightnetAccountManager };
    };
})(Network || (Network = {}));
