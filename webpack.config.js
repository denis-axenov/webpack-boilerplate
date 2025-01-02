import path from 'path';
import * as Sass from 'sass';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';


const resolveDir = (dir) => path.resolve(process.cwd(), dir);

export default (env, argv) => {
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
            path: buildFolder
        },
        resolve: {
            extensions: [
                '.js'
            ],
            alias: {
                '@': resolveDir('src')
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
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isProduction
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: isProduction,
                                postcssOptions: {
                                    plugins: [
                                        'autoprefixer',
                                        'postcss-preset-env',
                                        ...(isProduction ? ['cssnano'] : [])
                                    ]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isProduction,
                                implementation: Sass
                            }
                        }
                    ]
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
            ...(isProduction || env.lint ? [
                new StylelintPlugin(),
                new ESLintPlugin({
                    configType: 'flat'
                }),
            ] : []),
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