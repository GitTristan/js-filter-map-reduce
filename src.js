module.exports = {
  compact: function(array) {
    return array.filter(function(elem) {
      return elem !== undefined;
    });
  },

  all: function(array, condition) {
    return array.reduce(function(pval,cval) {
      return pval && condition(cval);
    }, true);
  },

  allRecursive: function(array, condition) {
    if (array.length === 0) return true;
      return condition(array[0]) && this.allRecursive(array.slice(1), condition);
  },

  any: function(array, condition) {
    return array.reduce(function(pval,cval) {
      return pval || condition(cval);
    }, false);
  },

  anyRecursive: function(array, condition) {
    if (array.length === 1 ) return false;
    return condition(array[0]) || this.anyRecursive(array.slice(1), condition);
  },

  partition: function(array, condition) {
    return array.reduce(function(out, input) {
      condition(input) ? out[0].push(input) : out[1].push(input);
      return out;
    }, [[], []]);
  },

  // Non-inline solution:

  // partition: function(array, condition) {
  //   return array.reduce(function(out, input){
  //     if(condition(input)){
  //       out[0].push(input);
  //     } else{
  //       out[1].push(input);
  //     }
  //     return out;
  //   }, [[], []]);
  // },


  sumOfEvenAscii: function(string) {
    function getCharCode(string) { return string.charCodeAt(); }
    function isEven(number) { return number % 2 == 0; }
    function sum(total, incr) { return total + incr; }

    return string.split("").map(getCharCode).filter(isEven).reduce(sum);
  },

  // sumOfEvenAscii: function(string) {
  //   return string.split('').map(function(elem) {
  //     return elem.charCodeAt();
  //   }).filter(function(charCodes) {
  //     return charCodes % 2 == 0;
  //   }).reduce(function(sum, incr) {
  //     return sum + incr;
  //   });

  reduce: function(array, combine, initialValue) {
    var i = 0;

    if (initialValue === undefined) {
      initialValue = array[0];
      i += 1;
    }

    var output = initialValue;

    for(i; i < array.length; i++) {
      output = combine(output, array[i]);
    }
    return output;
  },

  map: function(array, transformation) {
    var result = [];

    for (var i=0; i < array.length; i++) {
      result.push(transformation(array[i]));
    };
    return result;
  }
};
