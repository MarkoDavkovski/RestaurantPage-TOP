const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, 'src/index.js'),
	},

	output: {
		// path: path.resolve(__dirname, 'dist'),
		// filename: '[name][contenthash].js',
		// clean: true,
		// assetModuleFilename: '[name][ext]',
		// publicPath: '/',
		// --------------------
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Restaurant Page',
			filename: 'index.html',
			// template: 'src/template.html',
		}),
	],
};