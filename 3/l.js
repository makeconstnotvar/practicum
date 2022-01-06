const data = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16'.split(' ').map(x => +x);
const value = 7;

function bin(left, right) {
  if (right <= left)
    return -1;
  const mid = Math.floor((left + right) / 2);
  if (data[mid - 1] < value && data[mid] >= value)
    return mid + 1;
  else if (data[mid] >= value) {
    return bin(left, mid);
  } else {
    return bin(mid + 1, right);
  }
}


function brute(data, len, value) {
  let result = '';
  let inc = 2;
  let check = 0;
  let value2 = value * 2;
  for (let i = 0; i < len; i = i + inc) {
    if (check == 0 && data[i] >= value) {
      if (data[i - 1] >= value)
        i--;
      result += i + 1;
      check++;
    }
    if (check == 1 && data[i] >= value2) {
      if (data[i - 1] >= value2)
        i--;
      result += ' ' + (i + 1);
      check++
      break;
    }
  }
  if (check == 0) {
    result += '-1 -1';
  }
  if (check == 1) {
    result += ' -1';
  }
  return result;
}

console.log(bin(0, data.length));

//console.log(brute('1 2 4 4 6 8'.split(' ').map(x => +x), 6, 3))