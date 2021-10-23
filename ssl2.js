class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
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

function solution(node, idx) {
 let head = null;
  while ( current.next != null) {
    if (i == idx) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
    i++;
  }
  return head;
}

function test() {
  let node3 = new Node("node3");
  let node2 = new Node("node2", node3);
  let node1 = new Node("node1", node2);
  let node0 = new Node("node0", node1);
  print(node0)
  let newHead = solution(node0, 0);
  print(newHead)
}


test()