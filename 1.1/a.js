/*
https://contest.yandex.ru/contest/22450/problems/
Тимофей ищет место, чтобы построить себе дом. Улица, на которой он хочет жить, имеет длину n, то есть состоит из n одинаковых идущих подряд участков. Каждый участок либо пустой, либо на нём уже построен дом.

Общительный Тимофей не хочет жить далеко от других людей на этой улице. Поэтому ему важно для каждого участка знать расстояние до ближайшего пустого участка. Если участок пустой, эта величина будет равна нулю — расстояние до самого себя.

Помогите Тимофею посчитать искомые расстояния. Для этого у вас есть карта улицы. Дома в городе Тимофея нумеровались в том порядке, в котором строились, поэтому их номера на карте никак не упорядочены. Пустые участки обозначены нулями.

Формат ввода
В первой строке дана длина улицы —– n (1 ≤ n ≤ 106). В следующей строке записаны n целых неотрицательных чисел — номера домов и обозначения пустых участков на карте (нули). Гарантируется, что в последовательности есть хотя бы один ноль. Номера домов (положительные числа) уникальны и не превосходят 109.

Формат вывода
Для каждого из участков выведите расстояние до ближайшего нуля. Числа выводите в одну строку, разделяя их пробелами.

Пример 1
Ввод	Вывод
5
0 1 4 9 0
0 1 2 1 0
Пример 2
Ввод	Вывод
6
0 7 9 4 8 20
0 1 2 3 4 5

 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const n = +lines[0];
  const arr = lines[1].split(' ').map(x => +x);
  let value = 0;
  let zeros = 0;
  let i = 0;
  let j = 0;
  while (i < n) {
    if (arr[i] == 0) {
      value = 0;
      zeros++;
      j = i;
    } else {
      value++;
    }
    arr[i] = value;
    i++;
  }

  while (j >= 0) {
    if (arr[j] == 0) {
      value = 0;
      zeros--;
    } else if (zeros == 0 || value < arr[j]) {
      value++;
      arr[j] = value;
    }
    j--;
  }
  console.log(arr.join(' '))
}