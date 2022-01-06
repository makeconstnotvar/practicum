const data = '0 0 1 0 0 0 1 0 0 1'.split(' ').map(x => +x === 0 ? -1 : 1);
const sum = {};
const sums = [];
let total = 0;
let max = 0;
for (let i = 0; i < data.length; i++) {
  total += data[i];
  sums.push(total);
  console.log(i, total);
  if (total == 0) {
    max = i + 1;
  } else if (sum[total] != null) {
    let x = i - sum[total];
    max = Math.max(max, x);
  } else {
    sum[total] = i;
  }
  console.log(sum);
}
console.log(sums);
console.log(max);
