export default {
	transform: {
		'^.+\\.js?$': 'babel-jest'
	},
	testEnvironment: 'node',
	setupFilesAfterEnv: ['./setupTests.js'],
	preset: 'ts-jest'
};
