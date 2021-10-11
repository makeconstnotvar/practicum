let n = 13//917521579;
let div = 2;
let results = [];
console.time('test');
while (n > 1) {
  let x = n % div;
  if (x == 0) {
    results.push(div);
    n = n / div;
    if (isPrime(n)) {
      results.push(n);
      break;
    }
  } else {
    div = div % 2 == 0 ? div + 1 : div + 2;
  }
}
console.log(results)

function isPrime(num) {
  let i = 2;
  let s = Math.sqrt(num)
  for (i; i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}