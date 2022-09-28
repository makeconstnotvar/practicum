/*
https://contest.yandex.ru/contest/22449/problems/H/

Тимофей записал два числа в двоичной системе счисления и попросил Гошу вывести их сумму, также в двоичной системе. Встроенную в язык программирования возможность сложения двоичных чисел применять нельзя. Помогите Гоше решить задачу.
Решение должно работать за O(N), где N –— количество разрядов максимального числа на входе.

 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  let [a, b] = lines;
  binsum(a, b)
}

function binsum(a, b) {
  let [alen, blen] = [a.length-1, b.length-1];
  let len = alen > blen ? alen : blen
  let result = '';

  let cache = 0;
  for (let i = 0; i <= len; i++) {
    let A = a[alen - i] ? Number(a[alen - i]) : 0;
    let B = b[blen-i] ? Number(b[blen-i]) : 0;
    let sum = A + B + cache;
    if (sum == 0 || sum == 1)
      cache = 0;
    if (sum > 1)
      cache = 1;
    if (sum == 2)
      sum = 0;
    if (sum == 3)
      sum = 1;
    result = sum + result;
    if (i == len && cache) {
      result = cache + result;
    }
  }
  console.log(result);
}
