class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

function print(node) {
  let print = '';
  let current = node;
  while (current.next != null) {
    print += current.value + ' > ';
    current = current.next;
  }
  print += current.value;
  console.log(print);
}

function test() {
  let node3 = new Node("3");
  let node2 = new Node("2", node3);
  let node1 = new Node("1", node2);
  let node0 = new Node("0", node1);
  node1.prev = node0;
  node2.prev = node1;
  node3.prev = node2;
  print(node0);
  let newHead = solution(node0);
  print(newHead);
}

function solution(node) {
  let previousNode = null;
  let current = node;
  let nextNode = null;
  while (current != null) {
    nextNode = current.next;
    current.next = previousNode;
    current.prev = nextNode;
    previousNode = current;
    current = nextNode;
  }
  return previousNode;
}

test()

function swapNode(node) {
  return {
    value: node.value,
    next: node.prev,
    prev: node.next
  }
}

function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b]
}

function swapObj(obj, field1, field2) {
  obj[field1] = obj[field1] ^ obj[field2];
  obj[field2] = obj[field1] ^ obj[field2];
  obj[field1] = obj[field1] ^ obj[field2];
}

/*
let a = 1;
let b = 300;
console.log(a, b);
[a, b] = swap(a, b);
console.log(a, b);

let A = {a: 1, b: 2};
console.log(A);
swapObj(A, 'a', 'b')
console.log(A);
*/
