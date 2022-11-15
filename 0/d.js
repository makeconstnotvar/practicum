/*
https://contest.yandex.ru/contest/26365/problems/D/

Рита и Гоша играют в игру. У Риты есть n фишек, на каждой из которых написано количество очков.
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
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = numbers[i];
      const b = numbers[j];
      if (a + b == x)
        return [a, b].join(' ');
    }
  }
  return 'None'

}