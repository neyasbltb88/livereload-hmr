const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CustomHotUpdateStrategy = require('webpack-custom-hot-update-strategy');
const updateFetchEval = require('webpack-custom-hot-update-strategy/strategies/update/hotDownloadUpdateChunkFetchEval');

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV = NODE_ENV === 'development';

const { publicPath } = require('./base.config.js');
const devServerConfig = require('./dev-server.config.js');

config = {
    mode: NODE_ENV,
    context: path.resolve(__dirname, 'src'),

    entry: {
        index: './scripts/index'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath
    },

    watch: DEV,
    watchOptions: {
        aggregateTimeout: 100
    },

    devServer: devServerConfig,

    // devtool: DEV ? 'eval-inline-source-map' : false,
    devtool: DEV ? 'inline-source-map' : false,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            'process.env.DEV': JSON.stringify(DEV)
        }),
        new webpack.ProvidePlugin({
            dom: [path.resolve(path.join(__dirname, 'src', 'scripts', 'utils', 'dom')), 'default']
        }),
        new HtmlWebpackPlugin({
            title: 'JSX Test',
            template: './index.html'
        }),
        new CustomHotUpdateStrategy({
            update: updateFetchEval
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-typescript', '@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                            '@babel/plugin-proposal-optional-chaining',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-jsx',
                            ['@babel/plugin-transform-react-jsx', { 'pragma': 'dom' }]
                        ]
                    }
                }
            },
            {
                test: /\.txt$|\.png$|\.jpg$|\.jpeg$|\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentWidth: 4
                            }
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['index.js', '.js', '.jsx', '.ts', '.tsx', '*'],
        alias: {
            '@utils': path.resolve(__dirname, './src/scripts/utils')
        }
    }
};

module.exports = config;
