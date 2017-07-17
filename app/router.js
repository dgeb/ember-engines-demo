import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.mount('ember-blog-engine', { as: 'blog' });
  this.mount('ember-chat-engine', { path: 'chat' });
});

export default Router;
