const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => line && lines.push(line));

process.stdin.on('end', resolve);

function resolve() {
  let n = +lines.shift();
  let data = lines.sort((a, b) => a - b);
  let i = 0;
  let result = [];
  while (i < n) {
    let [one, two] = data[i].split(' ');
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

reader.on('line', line => {
  counter++;
  if (counter > 1) {
    let [one, two] = line.split(' ');
    for (let i = +one; i <= +two; i++) {
      temp[i] = (i === +two && temp[i] !== 0) ? 1 : 0;
    }
  }
});

process.stdin.on('end', () => {
  let inside = 0;
  let start = 0;
  temp.forEach((x, i) => {
    if (x === 0 && !inside) {
      inside = 1;
      start = i;
    }
    if (x === 1) {
      inside = 0;
      console.log(`${start} ${i}`);
    }
  })
});
