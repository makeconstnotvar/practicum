const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const y = +lines[0];
  const matrix = [];
  let i = 0;

  if(!y) return;

  while (i < y) {
    const row = lines[i+2].split(' ').map(x => +x);
    matrix[i] = row;
    i++;
  }

  const result = matrix[0].map((col, c) => {
    return matrix.map((row, r) => {
      return matrix[r][c];
    })
  })

  result.forEach(row => {
    console.log(row.join(' '));
  })
}
