class Stack {
  constructor(items = []) {
    this.items = items.reverse();
    let len = items.length;
    this.last = len ? this.items[len - 1] : null;
  }

  push(value) {
    this.items.push(value);
    this.last = value;
  }

  pop() {
    const last = this.items.pop();
    const len = this.items.length;
    this.last = (!last || len == 0) ? null : this.items[len - 1]
    return last;
  }

  get empty() {
    return this.items.length == 0;
  }

  get top() {
    return this.last;
  }

  get size() {
    return this.items.length;
  }

  get data() {
    return this.items || [];
  }

  log() {
    console.log('main', this.items);
  }
}

const data = '2 5 - 4 /'.split(' ');
const stack = new Stack();
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.floor(a / b)
}
data.forEach(x => {
  if (Number.isInteger(+x)) {
    stack.push(+x)
  } else {
    const right = stack.pop();
    const left = stack.pop();
    const result = operations[x](left, right);
    stack.push(result);
  }
})
console.log(stack.last);