const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Sass = require('sass');


module.exports = (env, argv) => {

    const buildFolder = path.resolve(__dirname, 'dist');
    const isProduction = argv.mode === 'production';

    return {
        target: 'web',
        devtool: !isProduction && 'source-map',
        entry: [
            './src/scripts/main.js',
            './src/styles/main.scss'
        ],
        output: {
            filename: 'bundle.js',
            path: buildFolder,
            devtoolModuleFilenameTemplate: info =>
                `file:///${path.resolve(__dirname, info.resourcePath).replace(/\\/g, '/')}`
        },
        resolve: {
            extensions: [
                '.js'
            ],
            alias: {
                '@images': path.resolve(__dirname, 'src/images'),
                '@fonts': path.resolve(__dirname, 'src/fonts'),
                '@scripts': path.resolve(__dirname, 'src/scripts'),
                '@styles': path.resolve(__dirname, 'src/styles'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'swc-loader'
                    }
                },
                {
                    test: /\.scss$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        }, {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        'autoprefixer',
                                        'cssnano',
                                        'postcss-preset-env'
                                    ]
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: Sass
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
                    type: 'asset/resource',
                    exclude: path.resolve(__dirname, 'src/images'),
                    generator: {
                        filename: 'fonts/[name][ext]'
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                    exclude: path.resolve(__dirname, 'src/fonts'),
                    generator: {
                        filename: 'images/[name][ext]'
                    }
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'bundle.css'
            }),
            new HtmlWebpackPlugin({
                template: './src/templates/index.html',
            }),
            ...(isProduction ? [
                new CleanWebpackPlugin({
                    cleanOnceBeforeBuildPatterns: [
                        buildFolder
                    ]
                })
            ] : [])
        ],
        optimization: {
            minimize: isProduction
        },
        stats: 'minimal',
        devServer: {
            static: {
                directory: buildFolder
            },
            compress: isProduction,
            port: 9000,
            watchFiles: [
                './src/*.html'
            ],
            hot: true,
            open: true
        }
    };
};
