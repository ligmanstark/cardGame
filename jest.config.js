module.exports = {
	roots: ['./lib/tests'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
	},
	moduleNameMapper: {
		moduleNameMapper: {
			'\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
			'\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
		},
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
	globals: {
		window: {},
	},
};
