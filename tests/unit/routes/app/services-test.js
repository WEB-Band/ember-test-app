import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | app/services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:app/services');
    assert.ok(route);
  });
});
