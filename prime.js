function eratosthenes(n) {
  let nums = {'0': 0, '1': 0};
  let i = 2;
  while (i < n) {
    nums[i] = 1;
    i++;
  }
  for (let i = 2; i < n; i++) {
    if (nums[i]) {
      for (let j = i * i; j <= n; j = j + i) {
        //console.log(i, j)
        nums[j] = 0;
      }
    }
  }
  let primes = []
  for (let key in nums) {
    if (nums[key])
      primes.push(+key)
  }
  console.log(primes)
}

//eratosthenes(100)


function linear(n) {
  const lp = [0,1];
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (!lp[i]) {
      lp[i] = i;
      primes.push(i);
    }
    for (let j = 0; j < primes.length;j++) {
      let p = primes[j];
      let x = p * i;
      if (p > lp[i] || x > n) {
        break;
      }

      lp[x] = p;
    }
  }
  console.log(primes.length)
}

//linear(100)

function primeSieve(max) {
  let n = (max - 1) / 2;
  let results = [];
  let imax = (Math.sqrt(2 * n + 1) - 1) / 2;

  for (let i = 1; i <= n; i++)
    results[i] = 1;

  for (let i = 1; i <= imax; i++) {
    let jmax = (n - i) / (2 * i + 1);
    for (let j = i; j <= jmax; j++) {
      let a = i + j + 2 * i * j;
      results[a] = 0;
    }
  }

  let nums = results.reduce((acc, val, idx) => {
    if (val)
      acc.push(2 * idx + 1);
    return acc;
  }, [2]);
return nums;
  //document.querySelector('#result').textContent = nums.join(', ')
}
console.time('test');
primeSieve(100000000);
console.timeEnd('test');
