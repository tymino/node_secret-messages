require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env'],
});
require("@babel/polyfill");

require('./server');
