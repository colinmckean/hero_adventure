Hero = function(name, health, favoriteFood) {
  this.name = name;
  this.health = health;
  this.favoriteFood = favoriteFood;

}

Hero.prototype = {
  speak: function(){
    return "Hello, my name is " + this.name;
  },
  eat: function(food){
    if(food.food_name == this.favoriteFood){
      this.health += (food.replenishment_value * 1.5);
  }else{
    this.health += food.replenishment_value;

  }
  }
}

module.exports = Hero;