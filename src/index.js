require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_module)/],
});

require("@babel/polyfill");

require('./server');
