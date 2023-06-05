
var ailiuxing = {
  chunk: function (ary, size) {
    var result = []
    for (var i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },


  compact: function (array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },


  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },


  drop: function (array, n) {
    if (n == null) {
      n = 1
    }
    if (n == 0) {
      return array
    }
    return array.splice(n)
  },


  difference: function (array, values) {
    const set = new Set(values);
    return array.filter(item => !set.has(item));
  },


  flatten: function (array) {
    var result = [];
    for (var i = 0, len = array.length; i < len; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(flatten(array[i]));
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
flatten(array)
}