let arr = [1, 1, 0, 1, 4, 9, 7, 0, 12, 5]
let n = arr.length;
let value = 0;
let zeros = 0;
let started = false;
for (let i = 0; i < n; i++) {
  if (arr[i] == 0) {
    value = 0;
    zeros++;
  } else {
    value++;
  }
  arr[i] = value;
}
for (let i = n - 1; i >= 0; i--) {
  if (arr[i] == 0) {
    started = true;
    value = 0;
    zeros--;
  }
  if (started) {
    if (zeros == 0) {
      arr[i] = value;
      value++;
    } else if (value < arr[i]) {
      value++;
      arr[i] = value;
    }
  }
}
console.log(arr.join(' '))