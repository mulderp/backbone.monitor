// Backbone.Monitor.js 0.1.0
// --------------------------

//     (c) 2014 Patrick Mulder
//     Backbone.Monitor may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/mulderp/Backbone.Monitor

var _ = require('underscore');
var Backbone = require('backbone');

Monitor = function(obj) {
  _.extend(this, Backbone.Events);
  this.listenTo(obj, 'all', function (eventName) {
    console.log('[event] ' + eventName + ' - view: ' + obj.el);
  });
}

module.exports = Monitor;
