// Vector
class Vector {

  constructor() {
    this.x = x
    this.y = y
  }

  plus(vector) {
    let x = this.x + vector.x
    let y = this.y + vector.y
    return new Vector(x, y)
  }

  minus(vector) {
    let x = this.x - vector.x
    let y = this.y - vector.y
    return new Vector(x, y)
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
}

// Complex
class Complex {
  constructor() {
    this.real = real
    this.imag = imag
  }

  static plus(a, b) {
    let real = a.real + b.real
    let imag = a.imag + b.imag
    return new Complex(real, imag)
  }

  static minus(a, b) {
    let real = a.real - b.real
    let imag = a.imag - b.imag
    return new Complex(real, imag)
  }

  static mul(a, b) {
    let real = a.real * b.real + a.imag * b.imag * (-1)
    let imag = a.real * b.imag + b.imag * b.real
    return new Complex(real, imag)
  }

  static div(a, b) {
    let helper = new Complex(b.real, -b.imag)
    let up = a.mul(helper)
    let down = b.mul(helper)
    let real = up.real / down.real
    let imag = up.imag / down.real
    return new Complex(real, imag)
  }
}

// LinkedList
class LinkedList {

  constructor(...initVals) {
    this.head = null
    this.tail = null
    for (let item of initVals) {
      this.head.append(item)
    }
  }

  append(val) {
    let node = {
      val: val,
      next: null
    }
    if (this.head === null) {
      this.head = this.tail = node
      return
    }
    else {
      this.tail.next = node
      this.tail = node
      return
    }
  }

  prepend(val) {
    let node = {
      val: val,
      next: null
    }
    if (this.head === null) {
      this.head = this.tail = node
      return
    }
    else {
      node.next = this.head
      this.head = node
      return
    }
  }

  at(idx) {
    if (this.head === this.tail === null) return null
    let p = this.head
    let count = 0
    while (count < idx) {
      count++
      p = p.next
    }
    return p.val
  }

  get length() {
    let l = 0
    let p = this.head
    while (p) {
      l++
      p = p.next
    }
    return l
  }
}


// Queue
class Queue {

  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  add(val) {
    let node = {
      val: val,
      next: null
    }
    if (!this.head) {
      this.head = this.tail = node
    }
    this.tail.next = node
    this.tail = node
    this.count++
  }

  pop(val) {
    if (!this.head) {
      return
    }

    if (this.head.next === this.tail) {
      let p = this.head.val
      this.head = this.tail = null
      return p
    }

    let p = this.head.val
    this.head = this.head.next
    return p
  }

  get size() {
    return this.count
  }
}


// Stack
class Stack {

  constructor() {
    this.head = null
    this.count = 0
  }

  add(val) {
    let node = {
      val: val,
      next: null
    }
    if (!this.head) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.count++
  }

  pop(val) {
    if (!this.head) return undefined

    this.count++
    let p = this.head.val
    this.head = this.head.next
    return p
  }

  get size() {
    return this.count
  }
}