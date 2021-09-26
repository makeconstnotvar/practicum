const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => {
  if (line)
    lines.push(+line);
});

process.stdin.on('end', solve);

function solve() {
  const [a, b] = lines;

  const answer = a + b;

  console.log(answer);
}