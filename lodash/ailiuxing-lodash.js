var ailiuxing = {
  chunk: function (ary, size) {
    var result = []
    for (var i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  }
}


var ailiuxing = {
  function compact(array) {
    var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];

while (++index < length) {
  var value = array[index];
  if (value) {
    result[resIndex++] = value;
  }
}
return result;
  }  
}