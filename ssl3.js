class SslQueue {
  constructor() {
    this.head = this.tail = null;
    this.len = 0;
  }

  get() {
    if (this.head != null) {
      const {value} = this.head;
      this.head = this.head.next;
      this.len--;
      return value
    }
    return 'error'
  }

  put(x) {
    if (this.head == null) {
      this.head = this.tail = {
        next: null,
        value: x
      };
    } else {
      let cache = this.tail;
      cache.next = {
        next: null,
        value: x
      };
      this.tail = cache.next;
    }
    this.len++
  }

  size() {
    return this.len;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current.next != null) {
      result += current.value + ' -> ';
      current = current.next;
    }
    result += current.value;
    console.log(result);
  }
}

const q = new SslQueue();
q.put(1);
q.put(2);
q.put(3);
q.print();
console.log(q.size());
console.log(q.get());
q.print();
console.log(q.size());
q.put(4);
q.put(5);
q.print();