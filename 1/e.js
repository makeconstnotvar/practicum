/*
https://contest.yandex.ru/contest/22449/problems/E/

Чтобы подготовиться к семинару, Гоше надо прочитать статью по эффективному менеджменту. Так как Гоша хочет спланировать день заранее, ему необходимо оценить сложность статьи.
Он придумал такой метод оценки: берётся случайное предложение из текста и в нём ищется самое длинное слово. Его длина и будет условной сложностью статьи.
Помогите Гоше справиться с этой задачей.

Формат ввода
В первой строке дана длина текста L (1 ≤ L ≤ 105).
В следующей строке записан текст, состоящий из строчных латинских букв и пробелов. Слово —– последовательность букв, не разделённых пробелами.
Пробелы могут стоять в самом начале строки и в самом её конце. Текст заканчивается переносом строки, этот символ не включается в число остальных L символов.

Формат вывода
В первой строке выведите самое длинное слово. Во второй строке выведите его длину. Если подходящих слов несколько, выведите то, которое встречается раньше.

i love segment tree => segment 7
frog jumps from river => jumps 5
 */

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  const len = +lines[0];
  const data = lines[1];
  let max = '',
    current = '';
  for (let i = 0; i <= len; i++) {
    let cursor = data[i];
    if (cursor == ' ' || i == len) {
      if (current.length > max.length) {
        max = current;
      }
      current = ''
    } else {
      current += cursor;
    }
  }
  console.log(max)
  console.log(max.length)
}