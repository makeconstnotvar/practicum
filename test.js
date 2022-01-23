/*const readline = require('readline');

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
*/

const compose1 = (...fns) => x => fns.reduceRight((arg, fn) => fn(arg), x);

function compose2(...fns) {
  return function (arg) {
    return fns.reduce(function (composed, fn) {
      fn(composed)
      return arg
    })
  }
}

function compose3(...fns) {
  return function (...args) {
    return fns.reduce(function (f, g) {
      return f(g.apply(this, args));
    });
  }
}

let x = compose1(a => a + 1, b => b + 2, c => c + 3);
console.log(x(1))
