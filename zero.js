let arr = [1, 1, 1, 99, 0, 100, 72, 43, 49, 0, 51, 19, 61, 93, 31]
let n = arr.length;
let value = 0;
let zeros = 0;
let i = 0;
let j = 0;
while (i < n) {
  if (arr[i] == 0) {
    value = 0;
    zeros++;
    j = i;
  } else {
    value++;
  }
  arr[i] = value;
  i++;
}

while (j >= 0) {
  if (arr[j] == 0) {
    value = 0;
    zeros--;
  }
  else if (zeros == 0 || value < arr[j]) {
    value++;
    arr[j] = value;
  }
  j--;
}
console.log(arr.join(' '))