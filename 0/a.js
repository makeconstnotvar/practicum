/*
https://contest.yandex.ru/contest/26365/problems/A/

Это ваша первая задача.
В ней вам придётся прочитать два числа и сложить их.
Результат необходимо вывести на стандартный поток вывода или в файл, указанный в условии задачи.
*/


const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(+line.trim()));

process.stdin.on('end', resolve);

function resolve() {
    const [a, b] = lines;

    const answer = a + b;

    console.log(answer);
}