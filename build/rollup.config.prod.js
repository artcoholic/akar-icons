process.env.NODE_ENV = 'production';

const { terser } = require('rollup-plugin-terser');
const configList = require('./rollup.config');

configList.map((config, index) => {

  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    ...[
      terser()
    ]
  ]

  return config;
})

module.exports = configList;