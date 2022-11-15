/*
https://contest.yandex.ru/contest/26365/problems/E/

Рита и Гоша играют в игру. У Риты есть n фишек, на каждой из которых написано количество очков. Фишки лежат на столе в порядке неубывания очков на них.
Сначала Гоша называет число k, затем Рита должна выбрать две фишки, сумма очков на которых равна заданному числу.
Рите надоело искать фишки самой, и она решила применить свои навыки программирования для решения этой задачи. Помогите ей написать программу для поиска нужных фишек.
*/


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const [a, b, c] = lines;
  const n = +a;
  const data = b.trim(" ").split(" ").map(x => +x);
  const k = +c;

  console.log(twosum(n, data, k))
}

function twosum(n, numbers, x) {
  const cache = new Set();
  for (let i = 0; i < n; i++) {
    const a = numbers[i];
    const y = x - a;
    if (cache.has(y))
      return [a, y].join(' ');
    else
      cache.add(a);
  }
  return 'None'
}