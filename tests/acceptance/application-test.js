import { test } from 'qunit';
import moduleForAcceptance from 'ember-engines-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.equal(find('.engine').length, 1);
    assert.equal(find('.engine:first p').text().trim(), 'CHAT HERE!');
  });
});

test('visiting /chat', function(assert) {
  visit('/chat');

  andThen(function() {
    assert.equal(currentURL(), '/chat');

    assert.equal(find('.engine').length, 2);
    assert.equal(find('.engine:first p').text().trim(), 'CHAT HERE!');
  });
});
