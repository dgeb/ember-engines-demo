import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const resolver = engineResolverFor('ember-chat-engine');

moduleForComponent('chat-box', 'Integration | Component | chat box', {
  integration: true,
  resolver
});

test('it renders', function(assert) {
  this.render(hbs`{{chat-box}}`);

  assert.equal(this.$().text().trim(), 'CHAT HERE!');
});
