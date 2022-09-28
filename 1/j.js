/*
https://contest.yandex.ru/contest/22449/problems/J/
Основная теорема арифметики говорит: любое число раскладывается на произведение простых множителей единственным образом, с точностью до их перестановки. Например:

Число 8 можно представить как 2 × 2 × 2.
Число 50 –— как 2 × 5 × 5 (или 5 × 5 × 2, или 5 × 2 × 5). Три варианта отличаются лишь порядком следования множителей.
Разложение числа на простые множители называется факторизацией числа.

Напишите программу, которая производит факторизацию переданного числа.
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
  let div = 2;
  let results = [];
  while (n > 1) {
    let x = n % div;
    if (x == 0) {
      results.push(div);
      n = n / div;
      if (isPrime(n)) {
        results.push(n);
        break;
      }
    } else {
      div = div % 2 == 0 ? div + 1 : div + 2;
    }
  }
  console.log(results.join(' '));
}

function isPrime(num) {
  let i = 2;
  let s = Math.sqrt(num)
  for (i; i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}