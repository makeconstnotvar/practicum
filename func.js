function window(n, nums, k) {
  let data = nums.trim(" ").split(" ")
  data = data.map(num => Number(num));

  let sum = 0;
  const result = [];
  for (let i = 0; i < k; i++) {
    sum += data[i];
  }
  result.push(sum / k);
  for (let i = 0; i < n - k; i++) {
    sum = sum - data[i] + data[i + k];
    result.push(sum / k);
  }
  console.log(result.join(' '))
}

window("7", " 1 2 3 4 5 6 7 ", "4");