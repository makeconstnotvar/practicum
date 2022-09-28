/*
https://contest.yandex.ru/contest/22449/problems/I/
Напишите программу, которая определяет, будет ли положительное целое число степенью четвёрки.

Подсказка: степенью четвёрки будут все числа вида 4n, где n – целое неотрицательное число.
 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  let n = +lines[0];
  let i = 0;
  let result = 0;

  while (result <= n) {
    result = Math.pow(4, i);
    if (result == n)
      break;
    i++;
  }

  console.log(result == n ? 'True' : 'False');
}