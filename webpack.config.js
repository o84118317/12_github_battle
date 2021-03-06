let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: ['@babel/polyfill', 'whatwg-fetch', './app/index.js'],
	
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},

	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
		]
	},

	// there are 'development' and 'production' two mode could use
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	],

	devServer: {
		historyApiFallback: true
	},
};