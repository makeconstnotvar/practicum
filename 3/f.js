const data = '5 3 7 2 8 3'.split(' ').map(x => +x).sort((a, b) => b - a);
console.log(data)
//[ 8, 7, 5, 3, 3, 2 ]
let result = 0;
for (let c = 0; c < data.length - 2; c++) {
  for (let b = c + 1; b < data.length - 1; b++) {
    for (let a = b + 1; a < data.length; a++) {
      let C = data[c];
      let B = data[b];
      let A = data[a];
      let x = test(C, B, A);
      if (x && x > result)
        result = x;
    }
  }
}
console.log(result);

function test(c, b, a) {
  if (c >= b && b >= a && c < a + b)
    return a + b + c;
}


