/*
https://contest.yandex.ru/contest/22450/problems/B/
Игра «Тренажёр для скоростной печати» представляет собой поле из клавиш 4x4. В нём на каждом раунде появляется конфигурация цифр и точек. На клавише написана либо точка, либо цифра от 1 до 9.

В момент времени t игрок должен одновременно нажать на все клавиши, на которых написана цифра t. Гоша и Тимофей могут нажать в один момент времени на k клавиш каждый. Если в момент времени t нажаты все нужные клавиши, то игроки получают 1 балл.

Найдите число баллов, которое смогут заработать Гоша и Тимофей, если будут нажимать на клавиши вдвоём.
 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const k = +lines[0] * 2;
  const a = lines[1].split('').map(x => +x).filter(x => !Number.isNaN(x));
  const b = lines[2].split('').map(x => +x).filter(x => !Number.isNaN(x));
  const c = lines[3].split('').map(x => +x).filter(x => !Number.isNaN(x));
  const d = lines[4].split('').map(x => +x).filter(x => !Number.isNaN(x));
  const nums = a.concat(b, c, d);
  const counter = nums.reduce((acc, x) => {
    if (!acc[x]) {
      acc[x] = 1
    } else
      acc[x]++;
    return acc;
  }, {});
  const result = Object.values(counter).filter(x => x <= k).length;
  console.log(result);
}