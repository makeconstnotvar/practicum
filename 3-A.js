const n = 3;
let result = []

function gen(n, openCount, closeCount, str) {
  if (openCount + closeCount == 2 * n) {
    result.push(str);
    return
  }
  if (openCount < n) {
     gen(n, openCount + 1, closeCount, str + '(')
  }
  if (openCount > closeCount) {
     gen(n, openCount, closeCount + 1, str + ')')
  }
}

gen(n,0,0, "")
console.log(result)