class Stack {
  constructor() {
    this.items = [];
    this.max = [];
    this.min = [];
  }

  get maxTop() {
    if (!this.maxEmpty) {
      return this.max[this.max.length - 1]
    }
  }

  get maxEmpty() {
    return this.max.length == 0;
  }

  get minTop() {
    if (!this.minEmpty) {
      return this.min[this.min.length - 1]
    }
  }

  get minEmpty() {
    return this.min.length == 0;
  }

  push(item) {
    this.items.push(item);

    if (this.maxEmpty || item > this.maxTop) {
      this.max.push(item);
    } else {
      this.max.push(this.maxTop);
    }

    if (this.minEmpty || item < this.minTop) {
      this.min.push(item);
    } else {
      this.min.push(this.minTop);
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log('error');
    } else {
      this.max.pop();
      this.min.pop();
      return this.items.pop();
    }
  }

  size() {
    return this.items.length;
  }

  top() {
    const i = this.size();
    if (i > 0)
      return this.items[i - 1];
    else
      return 'None';
  }

  isEmpty() {
    return this.size() == 0;
  }

  get_max() {
    if(this.maxEmpty)
      console.log('None');
    else
      console.log(this.maxTop);
  }
}
/*let s = new Stack()
s.get_max()
s.push(-6)
s.get_max()
s.pop()
s.push(-5)
s.push(-7)
s.get_max()*/
module.exports = Stack
