var Food = require('../Food');
var assert = require('assert');

beforeEach(function () {
  var food;
});

describe('Food', function () {
  food = new Food("Chicken", 10);
  it("hero should have a name of Colin", function () {
    assert.equal("Colin", hero.name);
  });
});