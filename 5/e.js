class CNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


function solution(root) {
  if (root.left != null && root.left.value > root.value || root.right != null && root.right.value < root.value) {
    return false
  } else {
    if (root.left != null)
      solution(root.left)
    if (root.right != null)
      solution(root.right)
  }
  return true;
}

function test() {
  var node1 = new CNode(1, null, null);
  var node2 = new CNode(4, null, null);
  var node3 = new CNode(3, node1, node2);
  var node4 = new CNode(8, null, null);
  var root = new CNode(5, node3, node4);
  console.log(solution(root));
  node4.value = 5;
  console.log(1)
}

test()