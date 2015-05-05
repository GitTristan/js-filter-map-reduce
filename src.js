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
    var array = string.split([]);
    var newArray = array.map(function(elem) {
      return (elem.charCodeAt(0));
    });
    var evenArray = newArray.filter(function(x) {
      return (x%2 === 0);
    });
    var result = evenArray.reduce(function (y, z) {
      return y + z;
    });
    return result;
  },


  reduce: function(array, fn, initVal) {
    var i = 0;
    if (initVal === undefined) { initVal = array[0], i = 1; }
    for (i; i < array.length; i++) {
    var x = fn(initVal, array[i]);
      initVal = initVal + array[i];
    }
    return initVal;
  },

  map: function(array, fn) {
    var result = [];
    for (var i=0; i < array.length; i++) {
      result.push(fn(array[i]));
    };
    return result;
  }

};
