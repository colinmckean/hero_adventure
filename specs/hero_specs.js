var Hero = require('../Hero');
var Food = require('../Food');
var Rat = require('../Rat');
var assert = require('assert');

beforeEach(function () {
  var hero;
  var food;
  var rat;
})

describe('The Hero', function () {
  hero = new Hero("Colin", 100, "Chicken");
  it("should have a name of Colin", function () {
    assert.equal("Colin", hero.name);
  });
  it("should have 100 health to start", function () {
    assert.equal(100, hero.health);
  });
  it("should have a favorite food of chicken", function(){
    assert.equal("Chicken", hero.favoriteFood);
  });
  it("should talk and say his name", function(){
    assert.equal("Hello, my name is Colin", hero.speak());
  });
  it("should get a increased health boost if favorite food", function(){
    food = new Food("Chicken", 10);
    hero.eat(food)
    assert.equal(115, hero.health);
  });
  it("will get a standard health boost if food is not favorite food", function(){
    fooda = new Food("Rabbit Food", 10);
    hero.eat(fooda);
    assert.equal(125, hero.health);
  });
  it("will lose health when hero eats poisoned food.", function(){
    rat = new Rat();
    rat.touch(fooda);
    hero.eat(fooda);
    assert.equal(115, hero.health);
  })
});