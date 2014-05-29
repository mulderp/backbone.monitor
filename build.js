var bundle = require('cjs-umd');

var options = {
  input: 'index.js',
  output: 'backbone.monitor.js',
  exports: 'Backbone.Monitor',
  dependencies: [
    { name: 'underscore', exports: '_' },
    { name: 'backbone', exports: 'Backbone' }
  ],
  headTemplate: 'templates/umd.js'
};

bundle(options, function(err) {
  if (err) {
    console.log(err.stack);
  }
});
