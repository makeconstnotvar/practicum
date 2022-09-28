/*
https://contest.yandex.ru/contest/22449/problems/G/
Вася реализовал функцию, которая переводит целое число из десятичной системы в двоичную. Но, кажется, она получилась не очень оптимальной.
Попробуйте написать более эффективную программу.
Не используйте встроенные средства языка по переводу чисел в бинарное представление.
 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  let data = +lines[0];
  let result = '';

  while (data >= 1) {
    result = data % 2 + result;
    data = Math.floor(data / 2);
  }

  console.log(result);

}