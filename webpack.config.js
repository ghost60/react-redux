var path=require('path');
var node_modules=path.resolve(__dirname,'node_modules');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
	//入口
	entry:[
		'webpack/hot/dev-server', 
    	'webpack-dev-server/client?http://localhost:8080', 
		path.resolve(__dirname,'app/main.js')
	],
	//出口
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'
	},
	//解决方案
	resolve:{
		extensions:['','.js','.jsx']
	},	
	module:{
		//加载器
		loaders:[
			{test: /\.jsx?$/,loader: 'babel', exclude: /node_modules/,query: {cacheDirectory: true,presets: ['react', 'es2015']}},
      		{test: /\.css$/, loader: ExtractTextPlugin.extract('style','css')},
      		{test: /\.less$/, loader: 'style!css!less'},
      		{test: /\.scss$/, loader: ExtractTextPlugin.extract('style','css!sass')}
		]
		// noParse:[pathToReact]//不再重新打包reactjs
	},
	babel:{
		presets:['es2015','stage-0','react'],
		plugins:["transform-runtime"]
	},
	plugins:[
		new ExtractTextPlugin('[name].css')
	]
};