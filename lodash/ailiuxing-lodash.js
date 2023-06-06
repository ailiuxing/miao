
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
    let val = this.flattenDeep(values)
    let res = []
    let map = []
    for (let num of val) {
      if (!map[num]) {
        map[num] = true
      }
    }
    for (let i of array) {
      if (!(i in map)) {
        res.push(i)
      }
    }
    return res
  },


  flatten: function (array) {
    return array.flat()
  },


  flattenDepth: function (ary, n) {
    for (i = 0; i < n; i++) {
      ary = ary.flat()
    }
    return ary
  },


  fromPairs: function (pairs) {
    let res = {}
    for (let i = 0; i < pairs.length; i++) {
      let key = pairs[i][0]
      res[key] = pairs[i][1]
    }
    return res
  },


  head: function (array) {
    var arr = array[0]
    return arr
  },


  indexOf: function (array, value, fromIndex = 0) {
    if (fromIndex == -1) {
      for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == value) {
          return i;
        }
      }
    } else {
      for (var i = fromIndex; i < array.length; i++) {
        if (array[i] == value) {
          return i;
        }
      }
    }
  }
}