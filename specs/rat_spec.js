var Food = require('../Food');
var Rat = require('../Rat');
var assert = require('assert');

beforeEach(function () {
  var beef;
  var rat;
});

describe('Rat does rat stuff', function(){
  rat = new Rat();
  beef = new Food("Beef", 20);
  it('should touch food',function(){
    rat.touch(beef)
    assert.equal(beef.replenishment_value, -20);
  });
})
