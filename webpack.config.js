const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uuid = require('uuid/v1');
const globalBundleID = uuid();

module.exports = {
    mode: 'development',
    resolve: { extensions: ['.ts', '.js', '.jsx', '.json', '.es6'] },
    entry: './src/index.js',
    output: {
        //filename: './dist/bundle__' + globalBundleID + '.js',
        filename: './dist/bundle.[hash].js',
        path: path.resolve(__dirname),
    },
    devServer: {
        contentBase: "dist"
    },
    plugins: [
        // Generates a new html file, template is used for replicating a specific html format/elements
        new HtmlWebpackPlugin({
            title: 'Zillow Photo Gallery',
            filename: './dist/index.html',
            // path: path.resolve(__dirname),
            // template: './src/index.html'
        }),
        // gets css files and bundles into a single file with hash
        new MiniCssExtractPlugin({
            filename: "./dist/style.[hash].css"
                //filename: "./dist/style__" + globalBundleID + ".css"
        }),

        // To do: makes development easier by avoiding new bundle files when using hash
        // new CleanWebpackPlugin()

        // Alternative to file/img uploading
        // new CopyWebpackPlugin([
        //     { from: 'src/assets/images', to: './dist/images' }
        // ]),
    ],
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            // {
            //     test: /\.(gif|png|jpeg|jpg|svg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name]-[hash:8].[ext]',
            //         publicPath: './',
            //         outputPath: "./dist/images"
            //     }
            // },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            options: { includePaths: [path.resolve(__dirname)] },
                            sourceMap: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.(gif|png|jpeg|jpg|svg)$/i,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[ext].[hash]:",
            //             outputPath: "./dist/imgs"
            //         },
            //     }
            // },

            {
                test: /\.(png|jpg|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: '/images',
                        emitFile: true,
                    },
                },
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                    // Images larger than 1000 KB won’t be inlined
                    limit: 1000 * 1024,
                    // Remove quotes around the encoded URL –
                    // they’re rarely useful
                    noquotes: true,
                }
            },
            // {
            //     test: /\.svg$/,
            //     loader: "svg-url-loader?limit=10000&mimetype=image/svg+xml"
            // }
        ]
    }
}