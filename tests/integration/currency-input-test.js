import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { fillIn, find, triggerEvent } from 'ember-native-dom-helpers/test-support/helpers';

moduleForComponent('currency-input', 'Integration | Component | currency-input', {
  integration: true
});

test('default value', function(assert) {
  this.render(hbs`{{currency-input unmaskedValue=unmaskedValue}}`);
  triggerEvent('input', 'blur');
  assert.equal(find('input').value, '$ 0.00');
  assert.equal(this.unmaskedValue, '');
});

test('filled-in value', function(assert) {
  this.render(hbs`{{currency-input unmaskedValue=unmaskedValue}}`);
  fillIn('input', '1234567.89');
  triggerEvent('input', 'blur');
  assert.equal(find('input').value, '$ 1,234,567.89');
  assert.equal(this.unmaskedValue, '1234567.89');
});
