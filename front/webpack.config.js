const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// ts, sass, css, react

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),


	entry: {
		main: ['@babel/polyfill', './index.tsx']
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.json', '.js'],
		alias: {}
	},

	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},

	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},

	devtool: isDev ? 'source-map' : 'hidden-nosources-source-map',
	devServer: {
		port: 3000,
		hot: isDev,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		})
	],

	module: {
		rules: [
			//? css лоадер
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},

			//? обработка картинок
			{
				test: /\.(png|jpg|jpeg|svg|ico|gif)$/,
				type: 'asset/resource'
				// use: ['file-loader']
			},

			//? обработка шрифтов
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				type: 'asset/resource'
			},

			//? sass & scss
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},

			//? babel js
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},

			//? babel ts
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env', '@babel/preset-typescript'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					},
					//TODO: Лeчше переместить в режим разработки (сделать функцию лоадерс)
					'eslint-loader'
				]
			},
			//? babel tsx
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					},
					//TODO: Лeчше переместить в режим разработки (сделать функцию лоадерс)
					'eslint-loader'
				]
			}
		]
	}
}