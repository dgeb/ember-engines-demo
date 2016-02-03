/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-chat-engine',

  isDevelopingAddon: function() {
    return true;
  }
});
