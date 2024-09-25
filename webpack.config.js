const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Sass = require('sass');


module.exports = (env, argv) => {

    const resolveDir = (dir) => path.resolve(__dirname, dir);
    const buildFolder = resolveDir('dist');
    const isProduction = argv.mode === 'production';

    return {
        target: 'web',
        devtool: !isProduction && 'source-map',
        entry: [
            resolveDir('src/scripts/main.js'),
            resolveDir('src/styles/main.scss')
        ],
        output: {
            filename: 'bundle.js',
            path: buildFolder,
            devtoolModuleFilenameTemplate: info =>
                `file:///${resolveDir(info.resourcePath).replace(/\\/g, '/')}`
        },
        resolve: {
            extensions: [
                '.js'
            ],
            alias: {
                '@images': resolveDir('src/images'),
                '@fonts': resolveDir('src/fonts'),
                '@scripts': resolveDir('src/scripts'),
                '@styles': resolveDir('src/styles'),
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
                    exclude: resolveDir('src/images'),
                    generator: {
                        filename: 'fonts/[name][ext]'
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                    exclude: resolveDir('src/fonts'),
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
                template: resolveDir('src/templates/index.html'),
                inject: 'body'
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
    }
}