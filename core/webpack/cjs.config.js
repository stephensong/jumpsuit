var path = require('path')

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'jumpsuit.cjs.js',
    libraryTarget: 'commonjs2'
	},

  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
        loader: 'babel'
			}
		]
	}
}
