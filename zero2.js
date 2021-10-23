//let arr = [1, 1, 0, 1, 4, 9, 7, 0, 12, 5]
let arr = [0, 1, 4, 9, 0];
let n = arr.length;
let leftValue = 0;
let rightValue = 0;
let firstZero;
let lastZero;
let i = 0;
let j = n - 1;
while (i <= j) {
  if (arr[i] == 0) {
    if (firstZero == undefined)
      firstZero = i;
    leftValue = 0;
  } else {
    leftValue++;
  }
  arr[i] = leftValue;
  i++;
  if (arr[j] == 0) {
    if (lastZero == undefined)
      lastZero = j;
    rightValue = 0;
  } else {
    rightValue++;
  }
  arr[j] = rightValue;
  j--;
}
i = firstZero;
leftValue = 0;
while (i >= 0) {
  arr[i] = leftValue;
  i--;
  leftValue++;
}
j = lastZero;
rightValue = 0;
while (j < n) {
  arr[j] = rightValue;
  j++;
  rightValue++;
}
function getValue(){

}

console.log(arr.join(' '))