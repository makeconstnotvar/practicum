function getMedian1(left, right) {
  const both = [...left, ...right].sort((a, b) => a - b);
  const mid = both.length / 2 | 0;
  if (both.length % 2)
    return both[mid];

  return (Number(both[mid]) + Number(both[mid - 1])) / 2;
}

function getMedian2(nums1, nums2) {
  //Recur in proper oder
  if (nums1.length > nums2.length) return getMedian2(nums2, nums1);

  const x = nums1.length, y = nums2.length;
  let lo = 0, hi = x;

  //Iterate to find the mid
  while (lo <= hi) {
    //Get the floor values
    let partitionX = (lo + hi) / 2 | 0,
      partitionY = (x + y + 1) / 2 - partitionX | 0;

    //Get the max of first array and min of last array
    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minRightX = partitionX === x ? Infinity : nums1[partitionX];

    //Get the max of second array and min of first array
    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minRightY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      //If odd
      if ((x + y) & 1) return Math.max(maxLeftX, maxLeftY);
      //if even
      return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
    } else if (maxLeftX > minRightY) {
      //Continue the search in upperbound
      hi = partitionX - 1;
    } else {
      //Continue the search in lowerbound
      lo = partitionX + 1;
    }
  }
}

console.log(getMedian2([1, 2], [3, 4, 5]));