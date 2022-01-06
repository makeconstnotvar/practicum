const data = '3271 3298 3331 3397 3407 3524 3584 3632 3734 3797 3942 4000 4180 4437 4464 4481 4525 4608 4645 4803 4804 4884 4931 4965 5017 5391 5453 5472 5671 5681 5959 6045 6058 6301 6529 6621 6961 7219 7291 7372 7425 7517 7600 7731 7827 7844 7987 8158 8169 8265 8353 8519 8551 8588 8635 9209 9301 9308 9336 9375 9422 9586 9620 9752 9776 9845 9906 9918 16 25 45 152 199 309 423 614 644 678 681 725 825 830 936 1110 1333 1413 1617 1895 1938 2107 2144 2184 2490 2517 2769 2897 2970 3023 3112 3156'.split(' ').map(x => +x);
const value = 25;

function brokenSearch(arr, k) {
  function bin(left, right) {
    if (left == right && arr[left] == k)
      return left;

    if (left >= right)
      return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] == k)
      return mid;

    if (isValidSide(left, mid, k))
      return bin(left, mid);

    else if (isValidSide(mid + 1, right, k))
      return bin(mid + 1, right);

    else if (isBrokenSide(left, mid))
      return bin(left, mid);

    else
      return bin(mid + 1, right);
  }

  function isValidSide(start, end, val) {
    const valid = arr[start] <= arr[end];
    const exist = val >= arr[start] && val <= arr[end];
    return valid && exist;
  }

  function isBrokenSide(start, end) {
    return arr[start] >= arr[end]
  }

  return bin(0, arr.length - 1);
}

console.log(brokenSearch(data, value))