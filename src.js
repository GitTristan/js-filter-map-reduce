module.exports = {
  compact: function(array) {
    return array.filter(function(elem) {
      return (elem !== undefined);
    })
  },

  all: function(array, condition) {
    return array.reduce(function(pval,cval) {
      return pval && condition(cval)
    })
  },

  allRecursive: function(array, condition) {
    if (array.length === 1 && condition(array[0]))
      return true;
    if (!condition(array[0]))
      return false;
    return this.allRecursive(array.slice(1,array.length), condition);
  },

  any: function(array, condition) {
    return array.reduce(function(pval,cval) {
      return pval || condition(cval)
    }, false);
  },

  anyRecursive: function(array, condition) {
    if (array.length < 1 ) {return false;}
    return condition(array[0]) || this.anyRecursive(array.slice(1, array.length), condition);
  },

  partition: function(array, condition) {
    trueArray = [];
    falseArray = [];
    array.forEach(function(elem){
      if(condition(elem))
        trueArray.push(elem);
      else
        falseArray.push(elem);
    });
    return [trueArray, falseArray];
  },


  sumOfEvenAscii: function(string) {
    // split the string into an array
    // map the array to ascii values, using charCodeAt()
    // filter the array to contain only even numbers
    // reduce that array into an accumulated sum
  }

  // You will need to add the reduce method yourself, obviously
  // your implementation should not call Array#reduce.

  // You will need to add the map method yourself, obviously
  // your implementation should not call Array#map.
};
