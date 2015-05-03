module.exports = {
  compact: function(array) {
    return array.filter(function(elem) {
      return (elem !== undefined);
    })
  },

  all: function any(array, condition) {
    return array.reduce(function(pval,cval) {
      return pval && condition(cval)
    })
  },

  allRecursive: function all(array, condition) {
    if (array.length === 1 && condition(array[0]))
      return true;
    if (!condition(array[0]))
      return false;
    return this.allRecursive(array.slice(1,array.length), condition);
  },

  any: function(array, condition) {
    // use `reduce` to write this method
  },

  anyRecursive: function(array, condition) {
    // write a recursive version of the `any` method
  },

  partition: function(array, condition) {
    // use `reduce` to write this method
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
