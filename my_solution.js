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