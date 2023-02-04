const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const mode =
	process.env.NODE_ENV === 'production' ? 'production' : 'development';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: './lib/chooseDiff.js',
	mode,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{ test: /\.svg$/, use: 'svg-inline-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new CopyPlugin({
			patterns: [{ from: 'res', to: 'static' }],
		}),
		new HtmlWebpackPlugin({
			favicon: './res/1f0cf.png',
			template: './index.html',
		}),
	],
	optimization: {
		minimizer: ['...', new CssMinimizerPlugin()],
	},
	devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
};
