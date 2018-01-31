var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname+'/client/html/index.html',
	filename: 'index.html',
	inject: 'body'
});

const path = require('path');

module.exports={
	entry:path.join(__dirname,'/client/index.js'),
	output:{
		filename:'bundle.js',
		path:__dirname,
		publicPath:'/'
	},
	module:{
		loaders:[{
			test:/\.jsx?$/,
			exclude:[/node_modules/,/server/],
			loader:'babel-loader'
		}]
	},
	plugins:[HTMLWebpackPluginConfig]
}