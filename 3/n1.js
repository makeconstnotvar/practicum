const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

let counter = 0;
const temp = [];
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
