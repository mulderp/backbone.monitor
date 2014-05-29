// Backbone.Monitor.js 0.1.0
// --------------------------

//     (c) 2014 Patrick Mulder
//     Backbone.Monitor may be freely distributed under the MIT license.
//     For all details and documentation:
//     https://github.com/mulderp/Backbone.Monitor

(function (factory) {
  if (typeof define === 'function' && define.amd) { define(['underscore', 'backbone', 'exports'], factory);
  } else if (typeof exports === 'object') { factory(require('underscore'), require('backbone'), exports);
  } else { factory(_, Backbone, {}); }
}(function (_, Backbone, Monitor) {

  Monitor = function(obj) {
    _.extend(this, Backbone.Events);
    this.listenTo(obj, 'all', function (eventName) {
      console.log('[event] ' + eventName + ' - object: ' + _.keys(obj));
    });
  }

  Backbone.Monitor = Monitor;
}));
