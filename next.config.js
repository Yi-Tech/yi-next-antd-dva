/* eslint-disable */
const withLess = require('./next.less');
const withSize = require('next-size');
const lessToJS = require('less-vars-to-js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const fs = require('fs');
const path = require('path');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
	fs.readFileSync(
		path.resolve(__dirname, './assets/antd-custom.less'),
		'utf8',
	)
);

const isDev = process.env.NODE_ENV !== 'production';

// fix antd bug in dev development
const devAntd = '@import "~antd/dist/antd.less";\n';
const stylesData = fs.readFileSync(
	path.resolve(__dirname, './assets/_styles.less'),
	'utf-8'
);
fs.writeFileSync(
	path.resolve(__dirname, './assets/self-styles.less'),
	isDev ? `${devAntd}${stylesData}` : stylesData,
	'utf-8'
);

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
	require.extensions['.less'] = () => { }
}

const srcFolder = [
	path.resolve(__dirname, './src/components'),
	path.resolve(__dirname, './src/constants'),
	path.resolve(__dirname, './src/containers'),
	path.resolve(__dirname, './src/core'),
	path.resolve(__dirname, './src/middlewares'),
	path.resolve(__dirname, './src/pages'),
	path.resolve(__dirname, './src/redux')
]

module.exports = withSize(
	withLess({
		cssModules: true,
		lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars: themeVariables,
			localIdentName: '[local]___[hash:base64:5]',
		},
		webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
			if (isServer) {
				// deal antd style
				const antStyles = /antd\/.*?\/style.*?/
				const origExternals = [...config.externals]
				config.externals = [
					(context, request, callback) => {
						if (request.match(antStyles)) return callback()
						if (typeof origExternals[0] === 'function') {
							origExternals[0](context, request, callback)
						} else {
							callback()
						}
					},
					...(typeof origExternals[0] === 'function' ? [] : origExternals),
				]
				config.module.rules.unshift({
					test: antStyles,
					use: 'null-loader',
				})
			}
			if (!dev) {
				config.plugins.push(
					...[
						new BundleAnalyzerPlugin({
							analyzerMode: 'disabled',
							// For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
							generateStatsFile: true,
							// Will be available at `.next/stats.json`
							statsFilename: 'stats.json'
						}),
						// 代替uglyJsPlugin
						new TerserPlugin({
							cache: true,
							terserOptions: {
								ecma: 6,
								warnings: false,
								extractComments: false, // remove comment
								output: {
									comments: false
								},
								compress: {
									drop_console: true // remove console
								},
								ie8: false
							}
						}),
						// optimize CSS
						new OptimizeCssPlugin({
							cssProcessor: require('cssnano'), //import cssnano option
							cssProcessorOptions: {
								discardComments: { removeAll: true }
							},
							canPrint: true // print info to console
						})
					]);
				config.module.rules.push({
					test: /\.js$/,
					include: srcFolder,
					options: {
						workerParallelJobs: 50,
						// additional node.js arguments
						workerNodeArgs: ['--max-old-space-size=1024'],
					},
					loader: 'thread-loader'
				});
				config.devtool = 'source-map';
			} else {
				// config.module.rules.push({
				//   test: /\.js$/,
				//   enforce: 'pre',
				//   include: srcFolder,
				//   options: {
				//     configFile: path.resolve('.eslintrc'),
				//     eslint: {
				//       configFile: path.resolve(__dirname, '.eslintrc')
				//     }
				//   },
				//   loader: 'eslint-loader'
				// });
				config.devtool = 'cheap-module-inline-source-map';
			}
			return config;
		},
		webpackDevMiddleware: config => {
			// Perform customizations to webpack dev middleware config
			// console.log(config, '@@')
			// Important: return the modified config
			return config;
		},
		serverRuntimeConfig: { // Will only be available on the server side
			rootDir: path.join(__dirname, './'),
			PORT: isDev ? 3006 : (process.env.PORT || 5999)
		},
		publicRuntimeConfig: { // Will be available on both server and client
			staticFolder: '/static',
			isDev, // Pass through env variables
		},
		env: {
			SERVER_HOST: 'http://www.yisoft.net.cn'
		}
	})
);