var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname
	},
	module: {
		loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
		}] 
	},
	devServer: {
		port: 8888,
		//contentBase: 'subcarpeta'
		inline: true 
	},
	plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
};
