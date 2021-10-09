const data = [-1, -10, -8, 0, 2, 0, 5];
const len = data.length;
let result = 0;
for (let i = 0; i < len; i++) {
  let before = data[i - 1];
  let current = data[i];
  let after = data[i + 1];
  if (i == 0 && (after < current || after == null))
    result++;
  else if (i == len - 1 && before < current)
    result++;
  else if (before < current && after < current)
    result++;
}
console.log(result)