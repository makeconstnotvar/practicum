/*
https://contest.yandex.ru/contest/26365/problems/C/

Вам дана статистика по числу запросов в секунду к вашему любимому рекомендательному сервису.
Измерения велись n секунд.
В секунду i поступает qi запросов.
Примените метод скользящего среднего с длиной окна k к этим данным и выведите результат.
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

  let sum = 0;
  const result = [];
  for (let i = 0; i < k; i++) {
    sum += data[i];
  }
  result.push(sum / k);
  for (let i = 0; i < n - k; i++) {
    sum = sum - data[i] + data[i + k];
    result.push(sum / k);
  }
  console.log(result.join(' '))
}