var user_ailiuxing = {
  chunk: function (ary, size) {
    let res = []
    for (let i = 0; i < ary.length; i += size) {
      res.push(ary.slice(i, i + size))
    }
    return res
  }
}
