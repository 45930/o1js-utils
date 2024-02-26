export { ONE_MICROMINA, ONE_MINA, Network };

/**
 * The minimum unit of divisible token value on Mina
 */
const ONE_MICROMINA = 1;

/**
 * The value of 1 full Mina token
 */
const ONE_MINA = 1_000_000;

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
	 * @param mina address of the mina graphQL node with which to interact
	 *
	 */
	export const berkeleyConfig = (
		config: {
			mina: string | string[];
			archive: string | string[];
		} = {
			mina: DEFAULT_BERKELEY_MINA_URLS,
			archive: DEFAULT_BERKELEY_ARCHIVE_URL
		}
	) => {
		const { mina, archive } = config;
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
	 * @param mina address of the mina graphQL node with which to interact
	 *
	 */
	export const lightnetConfig = (
		config: {
			mina: string | string[];
			archive: string | string[];
			lightnetAccountManager: string;
		} = {
			mina: DEFAULT_LIGHTNET_MINA_URL,
			archive: DEFAULT_LIGHTNET_ARCHIVE_URL,
			lightnetAccountManager: DEFAULT_LIGHTNET_MANAGER_URL
		}
	) => {
		const { mina, archive, lightnetAccountManager } = config;
		return { mina, archive, lightnetAccountManager };
	};
}
