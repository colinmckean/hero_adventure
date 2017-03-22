var Hero = require('../Hero');
var assert = require('assert');

beforeEach(function(){
  var hero;

})

describe('The Hero', function(){
  hero = new Hero("Colin");
  it("hero should have a name of Colin", function(){
    assert.equal("Colin", hero.name);
  });
  
})