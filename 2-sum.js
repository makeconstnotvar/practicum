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

  console.log(twosum1(n, data, k))
}


function twosum1(n, numbers, x) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = numbers[i];
      const b = numbers[j];
      if (a + b == x)
        return [a, b];
    }
  }
}

function twosum2(n, numbers, x) {
  const cache = new Set();
  for (let i = 0; i < n; i++) {
    const a = numbers[i];
    const y = x - a;
    if (cache.has(y))
      return [a, y].join(' ');
    else
      cache.add(a);
  }
  return 'None'
}


console.log(twosum2(5, [2, 1, 3, 5, 5], 4));