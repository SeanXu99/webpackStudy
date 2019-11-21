'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(jpg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20480
                        }
                    },
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            },
        ],
    },
    plugins: [
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        //按照模板生成html
        new HtmlWebpackPlugin({
            //指定的模板
            template: path.join(__dirname,'src/index.html'),
            //生成的文件名
            filename: 'index.html',
            //true/body script标签位于body底部
            //head script标签位于Head
            //false 没有script
            inject: true,
            //引用那个入口文件
            chunks: ['index'],
            minify: {
                //根据html5解析输入
                html5:true,
                //去空格
                collapsedWhitespace:true,
                //去换行
                preserveLineBreaks: false,
                //压缩HTML里的js
                minifyCSS: true,
                //压缩HTML里的CSS
                minifyJS: true,
                //去注释
                removeComments: false
            }
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),
            filename: 'search.html',
            chunks: ['search'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    },
};