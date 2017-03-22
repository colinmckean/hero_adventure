var Hero = require('../Hero');
var Food = require('../Food');
var assert = require('assert');

beforeEach(function () {
  var hero;
  var food;
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
  });
  it("hero should talk and say his name", function(){
    assert.equal("Hello, my name is Colin", hero.speak());
  });
  it("should get a increased health boost if favorite food", function(){
    food = new Food("Chicken", 10);
    hero.eat(food)
    assert.equal(115, hero.health);
  });
  it("Hero will get a standard health boost if food is not favorite food", function(){
    fooda = new Food("Rabbit Food", 10);
    hero.eat(fooda);
    assert.equal(125, hero.health);
  });
});