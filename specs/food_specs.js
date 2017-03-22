var Food = require('../Food');
var assert = require('assert');

beforeEach(function () {
  var food;
});

describe('Food', function () {
  food = new Food("Chicken", 10);
  it("Food should have a name of Chicken", function () {
    assert.equal("Chicken", food.food_name);
  });
});