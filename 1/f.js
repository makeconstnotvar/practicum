/*
https://contest.yandex.ru/contest/22449/problems/F/

Помогите Васе понять, будет ли фраза палиндромом‎. Учитываются только буквы и цифры, заглавные и строчные буквы считаются одинаковыми.
Решение должно работать за O(N), где N — длина строки на входе.

Формат ввода
В единственной строке записана фраза или слово. Буквы могут быть только латинские. Длина текста не превосходит 20000 символов.

Фраза может состоять из строчных и прописных латинских букв, цифр, знаков препинания.

Формат вывода
Выведите «True», если фраза является палиндромом, и «False», если не является.

A man, a plan, a canal: Panama => True
zo => False
 */


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const data = lines[0];
  let i = 0,
    j = data.length - 1,
    result = 'True';

  while (j > i) {
    while (!isValid(data[i]))
      i++;
    while (!isValid(data[j]))
      j--;
    if (data[i].toLowerCase() != data[j].toLowerCase()) {
      result = 'False';
      break;
    }
    i++;
    j--;
  }
  console.log(result)

}

function isValid(letter) {
  return /[A-Za-z0-9_]/.test(letter)
}
