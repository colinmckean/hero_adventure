var Food = require('../Food');
var Rat = require('../Rat');
var assert = require('assert');

beforeEach(function () {
  var beef;
  var rat;
});

describe('The Rat', function () {
  rat = new Rat();
  beef = new Food("Beef", 20);
  it('should touch food and make it toxic',function () {
    rat.touch(beef)
    assert.equal(beef.replenishment_value, -20);
  });
})
