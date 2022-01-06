let data = '82 468 941 181 287 861 291 515 263 424 470 620 954 894 565 69 148 587 823 57 730 389 921 1000 447 1000 748 104 831 943 174 24 340 1000 150 937 324 919 748 271 980 575 392 779 222 316 944 1000 160 501 319 436 26 828 348 211 825 857 486 1000 419 509 409 679 576 700 418 810 674 83 785 251 947 868 964 384 497 192 1000 998 756 649 269 290 197 30 95 796 642 980 474 122 443 707 839 213 1000 530 263 193'.split(' ');


function comparator(a, b) {
  let aLen = a.length;
  let bLen = b.length;
  if (aLen == bLen)
    return +b > +a;
  let len = aLen + bLen;
  let aVal, bVal;
  for (let i = 0; i < len; i++) {
    aVal = a.charAt(i) ? +a.charAt(i) : +b.charAt(i - aLen);
    bVal = b.charAt(i) ? +b.charAt(i) : +a.charAt(i - bLen);
    if (aLen < bLen) {
      if (aVal == bVal)
        continue;
      else
        return bVal > aVal;
    }
    if (aLen > bLen) {
      if (aVal == bVal)
        continue;
      else
        return bVal > aVal;
    }
  }
  return false;
}

function comparator1(a, b) {
  return Number(b + a) > Number(a + b)
}

function bubble(arr, comparator) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let a = arr[j];
      let b = arr[j + 1];
      if (comparator(a, b)) {
        let cache = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = cache;
      }
    }
  }
  return arr;
}

/*
console.log(comparator('2', '21'))
console.log(comparator('2', '22'))
console.log(comparator('2', '23'))
console.log(comparator('1', '20'))
console.log(comparator('3', '20'))
console.log('-')
console.log(comparator('21', '2'))
console.log(comparator('22', '2'))
console.log(comparator('23', '2'))
console.log(comparator('20', '1'))
console.log(comparator('20', '3'))
*/

console.log(bubble(data, comparator1))




