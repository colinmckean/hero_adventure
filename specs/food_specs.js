var Food = require('../Food');
var assert = require('assert');

beforeEach(function () {
  var food;
});

describe('The Food', function () {
  food = new Food("Chicken", 10);
  it("should have a name of Chicken", function () {
    assert.equal("Chicken", food.food_name);
  });
  it("should have a replenishment value", function () {
    assert.equal(10, food.replenishment_value);
  })
});