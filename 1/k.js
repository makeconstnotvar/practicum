/*
https://contest.yandex.ru/contest/22449/problems/K/
Вася просил Аллу помочь решить задачу. На этот раз по информатике.
Для неотрицательного целого числа X списочная форма –— это массив его цифр слева направо. К примеру, для 1231 списочная форма будет [1,2,3,1]. На вход подается количество цифр числа Х, списочная форма неотрицательного числа Х и неотрицательное число K. Числа К и Х не превосходят 10000.
Нужно вернуть списочную форму числа X + K.
 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const str1 = lines[1].split(' ');
  const str2 = lines[2].split('');
  const result = [];
  let flag = 0;

  while (str1.length || str2.length || flag) {
    const a = Number(str1.pop()) || 0;
    const b = Number(str2.pop()) || 0;
    const sum = a + b + flag;
    const rem = sum % 10;
    result.unshift(rem);
    flag = sum > 9 ? 1 : 0;
  }

  console.log(result.join(' '))

}