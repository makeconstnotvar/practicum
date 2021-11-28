const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line.split(' ')));

process.stdin.on('end', resolve);

function resolve() {
  let n = lines.shift()[0];
  let data = lines.sort((a, b) => a[0] - b[0]);
  let i = 0;
  let result = [];
  while (i < n) {
    let one = +data[i][0];
    let two = +data[i][1];
    if (result.length == 0 || one > result[result.length - 1][1]) {
      result.push([one, two])
    } else if (two > result[result.length - 1][1]) {
      result[result.length - 1][1] = two;
    }
    i++;
  }
  result.forEach(x => {
    console.log(x.join(' '))
  })
}