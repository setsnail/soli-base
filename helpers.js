module.exports = {
  random_from_array: function(arr) {
    return arr[Math.floor(Math.random()*arr.length)]; 
  },
  get_monkey: function(){
    var helpers = this,
        monkeys = [
          '🙈',
          '🙉',
          '🙊' 
        ];
    return helpers.random_from_array(monkeys);
  },
  no_entry: function(){
    var helpers = this,
        nope = [
      '🚫',
      '😶',
      '🙅',
      '⛔'
    ];
    return helpers.random_from_array(nope);
  }
};
