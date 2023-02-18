module.exports = {
	verbose: true,
	roots: ['./lib/tests'],
	transform: {
		'\\.js$': '<rootDir>/node_modules/babel-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
		"^.+\\.svg$": "<rootDir>/svgTransform.js",
		"^.+\\.png$": "<rootDir>/pngTransform.js"
	},
	moduleNameMapper: {
		moduleNameMapper: {
			'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
				'<rootDir>/__mocks__/fileMock.js',
			'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
		},
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
	globals: {
		window: {},
	},
};
