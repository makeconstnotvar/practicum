class Dek {
  constructor(max) {
    this.max = max;
    this.last = max - 1;
    this.items = Array(max);
    this.front = 0;
    this.back = max - 1;
    this.size = 0;
  }

  push_back(value) {
    if (this.size < this.max) {
      this.items[this.back] = value;
      this.back--;
      if (this.back < 0)
        this.back = this.last;
      this.size++;
    } else
      console.log('error');
  }

  push_front(value) {
    if (this.size < this.max) {
      this.items[this.front] = value;
      this.front++;
      if (this.front > this.last)
        this.front = 0;
      this.size++;
    } else
      console.log('error');
  }

  pop_front() {
    if (this.size > 0) {
      this.front--;
      if (this.front < 0) {
        this.front = this.last;
      }
      let x = this.items[this.front];
      this.items[this.front] = undefined;
      this.size--;
      console.log(x);
    } else
      console.log('error');
  }

  pop_back() {
    if (this.size > 0) {
      this.back++;
      if (this.back > this.last)
        this.back = 0;
      let x = this.items[this.back];
      this.items[this.back] = undefined;
      this.size--;
      console.log(x);
    } else
      console.log('error');
  }

  print() {
    console.log(`front:${this.front}`, `back:${this.back}`, this.items);
  }
}

let d = new Dek(8);

d.push_front(10)
d.push_back(1)
d.push_back(2)
d.push_back(3)
d.print()
d.pop_back()
d.print()
d.pop_back()
d.print()
d.pop_back()
d.print()
d.pop_back()
d.push_front(11)
d.push_front(12)
d.pop_back()
d.pop_back()
d.print()
