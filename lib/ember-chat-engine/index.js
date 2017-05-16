/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-chat-engine',
  lazyLoading: false,
  isDevelopingAddon: function() {
    return true;
  }
});
