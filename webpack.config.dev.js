var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// Template options for HtmlWebpackPlugin

var options = {
	title: 'Cell',
	filename: '../examples/index.html'
};


var extractSASS = new ExtractTextPlugin({
	filename: 'plumelet.css'
});


module.exports = {
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false,
		port: 3000,
		open: true
	},
	entry: [
		'./plumelet.js'
	],
	output: {
		path: './dist',
		filename: 'plumelet.js',
		publicPath: '../dist',
		devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
		devtoolLineToLine: {
			exclude: 'node_modules'
		}
	},
	plugins: [
		// new HtmlWebpackPlugin( options ),
		extractSASS
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules')
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: "file-loader?name=[name].[ext]&publicPath=../dist&outputPath=./dist"
			},
			{
				test: /\.scss$/,
				use: extractSASS.extract({
					fallback: "style-loader",
					use: [{
						loader: "css-loader" // translates CSS into CommonJS
					}, {
						loader: "sass-loader" // compiles Sass to CSS
					}]
				}),
				exclude: path.resolve(__dirname, 'node_modules')
			}
		]
	},
	devtool: 'source-map'
};

