function sum(s1, s2) {
  const str1 = s1.split("");
  const str2 = s2.split("");
  const result = [];
  let flag = 0;

  while (str1.length || str2.length || flag) {
    const a = Number(str1.pop()) || 0;
    const b = Number(str2.pop()) || 0;
    const sum = a + b + flag;
    const rem = sum % 10;
    result.unshift(rem);
    flag = sum > 9 ? 1 : 0;
  }

  console.log(result.join(' '))
}

console.log(sum('19999', '99'))
