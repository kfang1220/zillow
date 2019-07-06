const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const uuid = require('uuid/v1');
const globalBundleID = uuid();

module.exports = {
    mode: 'development',
    resolve: { extensions: ['.js', '.jsx', '.json', '.es6'] },
    entry: './src/index.js',
    output: {
        filename: './dist/bundle__' + globalBundleID + '.js',
        path: path.resolve(__dirname)
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Zillow Photo Gallery',
            filename: './dist/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "./dist/style__" + globalBundleID + ".css"
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         "style-loader", // creates style nodes from JS strings
            //         "css-loader", // translates CSS into CommonJS
            //         "sass-loader" // compiles Sass to CSS, using Node Sass by default
            //     ]
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


                        // MiniCssExtractPlugin.loader,
                        // "css-loader",
                        // {
                        //     loader: "sass-loader",
                        //     options: { includePaths: [path.resolve(__dirname)] }

                        // }
                    ]
                    // Want to do something like this to generate a second CSS theme bundle
                    // use: [
                    //     MiniCssExtractPlugin.loader,
                    //     "css-loader",
                    //     {
                    //         loader: "sass-loader",
                    //         options: {  includePaths: [path.resolve(__home, "src/dark-theme"),]}
                    //
                    //     }
                    // ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            // {
            //     test: /\.(png|jpe?g|gif)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             outputPath: 'components',
            //             emitFile: false,
            //         },
            //     }, ],
            // },
            // {
            //     test: /\.(csv|tsv)$/,
            //     use: [
            //         'csv-loader'
            //     ]
            // },
            // {
            //     test: /\.xml$/,
            //     use: [
            //         'xml-loader'
            //     ]
            // }
        ]
    }
}