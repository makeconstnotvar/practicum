let data = 29;
let result = '';
while (data >= 1) {
  result = data % 2 + result;
  data = Math.floor(data / 2)
}

console.log(result);