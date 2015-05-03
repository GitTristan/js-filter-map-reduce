var yourCode = require('../src');

function isEven(n) {
  return n % 2 == 0;
}

describe('#compact', function() {
  it('returns a new array with all provided undefined values removed', function() {
    var input = [undefined, 1,2,3, null, 'foo', 'bar'];
    expect(yourCode.compact(input)).toEqual([1,2,3, null, 'foo', 'bar']);
  });

  it('returns an empty array if all provided values are undefined', function() {
    var input = [undefined, undefined, undefined];
    expect(yourCode.compact(input)).toEqual([]);
  });
});

xdescribe('#all', function() {
  it('returns false if any  element in the provided array does not matches the condition given by the function parameter', function() {
    var input = [1,3,5,6,7];
    expect(yourCode.all(input, isEven)).toBe(false);
  });

  it('returns true if every element in the provided array matches the condition given by the function parameter', function() {
    var input = [2,4,6,8];
    expect(yourCode.all(input, isEven)).toBe(true);
  });
});

xdescribe('#allRecursive', function() {
  it('returns false if any  element in the provided array does not matches the condition given by the function parameter', function() {
    var input = [1,3,5,6,7];
    expect(yourCode.allRecursive(input, isEven)).toBe(false);
  });

  it('returns true if every element in the provided array matches the condition given by the function parameter', function() {
    var input = [2,4,6,8];
    expect(yourCode.allRecursive(input, isEven)).toBe(true);
  });
});

xdescribe('#any', function() {
  it('returns true if any element in the provided array matches the condition given by the function parameter', function() {
    var input = [1,3,5,6,7];
    expect(yourCode.any(input, isEven)).toBe(true);
  });

  it('returns false if no element in the provided array matches the condition given by the function parameter', function() {
    var input = [1,3,5,7,9];
    expect(yourCode.any(input, isEven)).toBe(false);
  });
});

xdescribe('#anyRecursive', function() {
  it('returns true if any element in the provided array matches the condition given by the function parameter', function() {
    var input = [1,3,5,6,7];
    expect(yourCode.anyRecursive(input, isEven)).toBe(true);
  });

  it('returns false if no element in the provided array matches the condition given by the function parameter', function() {
    var input = [1,3,5,7,9];
    expect(yourCode.anyRecursive(input, isEven)).toBe(false);
  });
});

xdescribe('#partition', function() {
  it('creates a new array whose first element is an array containing all positive matches for the provided comparison function and whose second element is an array containing all negative matches', function() {
    var input = [1,2,3,4,5,6];
    expect(yourCode.partition(input, isEven)).toEqual([[2,4,6], [1,3,5]]);
  });

  it('returns two empty arrays in an array when given an empty array', function() {
    var input = [];
    expect(yourCode.partition(input, isEven)).toEqual([[], []]);
  });
});

xdescribe('#reduce', function() {
  it('behaves like Array#reduce but accepts the array as the first argument', function() {
    expect(yourCode.reduce([1,2,3], function(sum, inc) { return sum + inc; }, 100)).toBe(106);
  });

  it('works without an initial value by taking the first array element as the initial value', function() {
    expect(yourCode.reduce([1,2,3], function(sum, inc) { return sum + inc; })).toBe(6);
  });
});

xdescribe("map", function() {
  it('behaves like Array#map and creates a new array from the original', function() {
    xpect(yourCode.map([1,2,3], function(elem) { return elem + 1; })).toEqual([2,3,4]);
  });

  it('behaves like Array#map and does not alter the original array', function() {
    var input = [1,2,3]
    yourCode.map(input, function(elem) { return elem + 1; });
    expect(input).toEqual([1,2,3]);
  });
})

xdescribe("sumOfEvenAscii", function() {
  it('maps a string to an array of ascii values, filters for the even values, and reduces the filtered results to the sum of each number', function() {
    expect(yourCode.sumOfEvenAscii("hello")).toBe(320);
  });
})
