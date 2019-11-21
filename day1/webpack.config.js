'use strict';

const path = require('path');
const webpack =require('webpack');
module.exports = {
    entry: {
        index: './src/index.js',
        link: './src/index.js'
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
            // {
            //     test:/.(jpg|png|gif|jpeg)$/,
            //     use:[
            //         'file-loader',
            //     ]
            // },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            },
        ],
    },
    plugins: [
        // 该插件会根据模块的相对路径生成一个四位数的hash作为模块id,
        new webpack.HashedModuleIdsPlugin()
    ],
    devServer: {
        contentBase:'./dist',
        hot:true
    },
    mode: 'development'
};