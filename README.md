backbone.monitor
================

A small plugin to track events from Backbone objects. This plugin is mainly for development of Backbone applications and can help you track binding problems between objects.

Usage example:
=============

```
var Backbone = require('backbone');
Backbone.$ = require('jquery-untouched');
var Monitor = require('backbone-monitor');

var view = new Backbone.View

// track events on view:
var monitor = new Backbone.Monitor(view);

view.trigger('rerender');
```

License
=======
MIT, (c) 2014 Patrick Mulder
