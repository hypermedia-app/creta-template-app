/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const { EnvironmentPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const { createDefaultConfig } = require('@open-wc/building-webpack')

module.exports = merge(
  createDefaultConfig({
    input: path.resolve(__dirname, './index.html'),
  }),
  {
    resolve: {
      extensions: ['.ts', '.mjs', '.js', '.json'],
      alias: {
        stream: 'readable-stream',
      },
    },
    node: {
      crypto: true,
    },
    plugins: [
      new EnvironmentPlugin({
        TRIFID_ENDPOINT: 'https://trifid.{{cookiecutter.app_name}}.lndo.site/query',
      }),
    ],
  },
)
