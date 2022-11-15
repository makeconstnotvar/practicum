/*
https://contest.yandex.ru/contest/22449/problems/L/
Васе очень нравятся задачи про строки, поэтому он придумал свою. Есть 2 строки s и t, состоящие только из строчных букв. Строка t получена перемешиванием букв строки s и добавлением 1 буквы в случайную позицию. Нужно найти добавленную букву.

 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const str1 = lines[0];
  const str2 = lines[1];

  const str = (str1+str2).split('');
  const set = new Set();
  str.forEach(letter => set.has(letter) ? set.delete(letter) : set.add(letter));

  console.log(set.values().next().value);

}