/*
https://contest.yandex.ru/contest/22449/problems/B/
Представьте себе онлайн-игру для поездки в метро: игрок нажимает на кнопку, и на экране появляются три случайных числа. Если все три числа оказываются одной чётности, игрок выигрывает.
Напишите программу, которая по трём числам определяет, выиграл игрок или нет.

Формат ввода
В первой строке записаны три случайных целых числа a, b и c. Числа не превосходят 109 по модулю.

Формат вывода
Выведите «WIN», если игрок выиграл, и «FAIL» в противном случае.

Примеры
1 2 -3 => FAIL
7 11 7 => WIN
6 -2 0 => WIN
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const nums = lines[0].split(' ').map(x => Number(x));
  let check = 0;
  nums.forEach(x => {
    check += Math.abs(x % 2);
  })
  const result = [0, 3].includes(check) ? 'WIN' : 'FAIL';
  console.log(result);
}
