const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        static: {
            directory: "./public"
        },
        compress: true,
        port: 9000
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                cache: true,
                parallel: true
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                // MiniCssExtractPlugin.loader, // Esse conflita com o debaixo
                {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                        publicPath: ''
                    }
                },
                {
                    loader: "css-loader",
                    loader: "sass-loader",

                }
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                // 'css-loader', // Interpreta @import, url() ...
                // 'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}