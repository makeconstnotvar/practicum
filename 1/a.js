/*
https://contest.yandex.ru/contest/22449/problems/

Вася делает тест по математике: вычисляет значение функций в различных точках.
Стоит отличная погода, и друзья зовут Васю гулять. Но мальчик решил сначала закончить тест и только после этого идти к друзьям. К сожалению, Вася пока не умеет программировать.
Зато вы умеете. Помогите Васе написать код функции, вычисляющей y = ax2 + bx + c.
Напишите программу, которая будет по коэффициентам a, b, c и числу x выводить значение функции в точке x.

Формат ввода
На вход через пробел подаются целые числа a, x, b, c. В конце ввода находится перенос строки.

Формат вывода
Выведите одно число — значение функции в точке x.

Примеры
-8 -5 -2 7 => -183
8 2 9 -10 => 40
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const datas = lines[0].split(' '),
    a = Number(datas[0]),
    x = Number(datas[1]),
    b = Number(datas[2]),
    c = Number(datas[3]);
  console.log(a * x * x + b * x + c)
}