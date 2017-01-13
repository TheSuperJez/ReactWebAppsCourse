var webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
        new ExtractTextPlugin("style.css")
    ],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		port: 3333,
        contentBase: 'public'
    },
	module: {
		loaders: [
  			{
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: ['babel'],
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.less$/, 
				exclude: /node_modules/, 
 				loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader?root=.")
            }, {
				test: /\.(eot|png|jpg|jpeg|gif|woff|woff2|svg|ttf)$/, 
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
			}
    	]	
	},
	watch: true,
}
