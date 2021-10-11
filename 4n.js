let n = 16;
let i = 0;
let result = 0;
while (result <= n) {
  result = Math.pow(4, i);
  if (result == n)
    break;
  i++;
}
console.log(result == n ? 'True' : 'False')