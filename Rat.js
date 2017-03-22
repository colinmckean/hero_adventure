Rat = function () {
}

Rat.prototype = {
  touch: function (food) {
    food.replenishment_value = (-food.replenishment_value);
  }
}

module.exports = Rat;