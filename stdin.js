const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const [n, data, k] = lines;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += data[i];
  }
  for (let i = 0; i < n; i++) {
    let start = i;
    let end = i + k;

  }


  console.log();
}