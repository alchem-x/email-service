import { resolve } from 'node:path'
import { VueLoaderPlugin } from 'vue-loader'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/**
 * Define webpack config
 *
 * @returns {import('webpack').Configuration}
 */
export default function defineConfig(env) {
  return {
    mode: 'development',
    entry: {
      index: resolve(import.meta.dirname, 'web/index.js'),
    },
    module: {
      rules: [
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /.less$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /\.jsx?$/i,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@vue/babel-plugin-jsx'],
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src'),
      },
    },
    externals: ['vue'],
    experiments: {
      outputModule: true,
    },
    output: {
      filename: '[name].js',
      library: {
        type: 'module',
      },
    },
    performance: {
      maxEntrypointSize: 1024 * 1024,
      maxAssetSize: 1024 * 1024,
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      allowedHosts: 'all',
      host: 'localhost',
      liveReload: true,
      hot: true,
    },
  }
}
