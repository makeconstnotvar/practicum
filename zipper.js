const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
  const n = Number(_inputLines[0]);
  const arr1 = _inputLines[1].trim(" ").split(" ").map(num => Number(num));
  const arr2 = _inputLines[2].trim(" ").split(" ").map(num => Number(num));
  const arr3 = [];
  for (let i = 0; i < n; i++) {
    arr3.push(arr1[i])
    arr3.push(arr2[i])
  }
  process.stdout.write(`${arr3.join(' ')}`);
}