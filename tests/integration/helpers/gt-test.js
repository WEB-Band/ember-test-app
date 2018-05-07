import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | gt', function(hooks) {
  setupRenderingTest(hooks);

  test('it comparison', async function(assert) {
    this.set('inputValue1', '4');
    this.set('inputValue2', '3');

    await render(hbs`{{gt inputValue1 inputValue2}}`);

    assert.equal(this.element.textContent.trim(), 'true', 'should see more 3 checked');

    await render(hbs`{{gt inputValue2 inputValue1}}`);

    assert.equal(this.element.textContent.trim(), 'false', 'should see less 3 checked');


  });
});
