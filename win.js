const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const [a, b, c] = lines;
  const n = +a;
  const data = b.trim(" ").split(" ").map(x => +x);
  const k = +c;
  console.log(window(n, data, k))
}

function window(n, numbers, k) {
  let sum = 0;
  const result = [];
  for (let i = 0; i < k; i++) {
    sum += numbers[i];
  }
  result.push(sum / k);
  for (let i = 0; i < n - k; i++) {
    sum = sum - numbers[i] + numbers[i + k];
    result.push(sum / k);
  }
  return result;
}