var Hero = require('../Hero');
var assert = require('assert');

beforeEach(function () {
  var hero;
})

describe('The Hero', function () {
  hero = new Hero("Colin", 100, "Chicken");
  it("hero should have a name of Colin", function () {
    assert.equal("Colin", hero.name);
  });
  it("hero should have 100 health to start", function () {
    assert.equal(100, hero.health);
  });
  it("hero should have a favorite food of chicken", function(){
    assert.equal("Chicken", hero.favoriteFood);
  })
})