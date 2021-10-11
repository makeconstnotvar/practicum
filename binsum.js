function binsum(a, b) {
  let [alen, blen] = [a.length-1, b.length-1];
  let len = alen > blen ? alen : blen
  let result = '';

  let cache = 0;
  for (let i = 0; i <= len; i++) {
    let A = a[alen - i] ? Number(a[alen - i]) : 0;
    let B = b[blen-i] ? Number(b[blen-i]) : 0;
    let sum = A + B + cache;
    if (sum == 0 || sum == 1)
      cache = 0;
    if (sum > 1)
      cache = 1;
    if (sum == 2)
      sum = 0;
    if (sum == 3)
      sum = 1;
    result = sum + result;
    if (i == len && cache) {
      result = cache + result;
    }
  }
  console.log(result);
}


binsum('1010', '1011')