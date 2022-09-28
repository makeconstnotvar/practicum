/*
https://contest.yandex.ru/contest/26365/problems/B/

Даны два массива чисел длины n. Составьте из них один массив длины 2n, в котором числа из входных массивов чередуются
(первый — второй — первый — второй — ...). При этом относительный порядок следования чисел из одного массива должен быть сохранён.
*/

const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];

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