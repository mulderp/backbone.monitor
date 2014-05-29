(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('underscore'), require('backbone'));
  }
  else if (typeof define === 'function' && define.amd) {
    define(['underscore', 'backbone'], factory);
  }
  else {
    root.Backbone.Monitor = factory(root['_'], root['Backbone']);
  }
}(this, function(_, Backbone) {
  function _requireDep(name) {
    return {'underscore': _, 'backbone': Backbone}[name];
  }

  var _bundleExports =
(function (define) {
    function _require(index) {
        var module = _require.cache[index];
        if (!module) {
            var exports = {};
            module = _require.cache[index] = {
                id: index,
                exports: exports
            };
            _require.modules[index].call(exports, module, exports);
        }
        return module.exports;
    }
    _require.cache = [];
    _require.modules = [function (module, exports) {
            var _ = _requireDep('underscore');
            var Backbone = _requireDep('backbone');
            Monitor = function (obj) {
                _.extend(this, Backbone.Events);
                this.listenTo(obj, 'all', function (eventName) {
                    console.log('[event] ' + eventName + ' - view: ' + obj.el);
                });
            };
            module.exports = Monitor;
        }];
    return  _require(0);
}());

  return _bundleExports;
}));