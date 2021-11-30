function sort(array) {
  if (array.length <= 1)
    return array;
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  const sortedLeft = sort(left);
  const sortedRight = sort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let l = 0, r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l), right.slice(r))
}

console.log(sort([2, 4, 6, 2, 1, 5, 23, 5, 8, 3, 4, 4, 66]));