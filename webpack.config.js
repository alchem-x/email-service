import { resolve } from 'node:path'
import { VueLoaderPlugin } from 'vue-loader'

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
          use: ['style-loader', 'css-loader'],
        },
        {
          resourceQuery: /^((?!raw).)*$/,
          test: /.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
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
    plugins: [new VueLoaderPlugin()],
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
