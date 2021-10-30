class MyQueueSized {
  constructor(size) {
    this.items = [];
    this.max = size;
  }

  push(x) {
    if (this.items.length == this.max) {
      console.log('error');
    } else {
      this.items.push(x);
    }
  }

  pop() {
    if (this.items.length > 0) {
      console.log(this.items.shift());
    } else {
      console.log('None');
    }
  }

  peek() {
    if (this.items.length > 0) {
      console.log(this.items[0]);
    } else {
      console.log('None');
    }
  }

  size() {
    console.log(this.items.length);
  }
}

let q = new MyQueueSized(2);
q.peek()
q.push(5)
q.push(2)
q.peek()
q.size()
q.size()
q.push(1)
q.size()