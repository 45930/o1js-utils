export { ONE_MICROMINA, ONE_MINA, Fee, Network };

/**
 * The minimum unit of divisible token value on Mina
 */
const ONE_MICROMINA = 1;

/**
 * The value of 1 full Mina token
 */
const ONE_MINA = 1_000_000;

namespace Fee {
	export const SM = ONE_MINA * 0.001;
	export const MD = ONE_MINA * 0.01;
	export const LG = ONE_MINA * 0.1;
}

namespace Network {
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
	export const berkeleyConfig = ({
		mina = DEFAULT_BERKELEY_MINA_URLS,
		archive = DEFAULT_BERKELEY_ARCHIVE_URL
	}: {
		mina?: string | string[];
		archive?: string | string[];
	}) => {
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
	export const lightnetConfig = ({
		mina = DEFAULT_LIGHTNET_MINA_URL,
		archive = DEFAULT_LIGHTNET_ARCHIVE_URL,
		lightnetAccountManager = DEFAULT_LIGHTNET_MANAGER_URL
	}: {
		mina?: string | string[];
		archive?: string | string[];
		lightnetAccountManager?: string;
	}) => {
		return { mina, archive, lightnetAccountManager };
	};
}
