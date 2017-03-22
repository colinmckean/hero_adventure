Hero = function(name, health, favoriteFood) {
  this.name = name;
  this.health = health;
  this.favoriteFood = favoriteFood;

}

Hero.prototype = {
  speak: function(){
    return "Hello, my name is " + this.name;
  }
}

module.exports = Hero;