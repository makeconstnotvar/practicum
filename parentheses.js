const Stack = require("./stack");
const data = '((())'
const vocab = {
  ')': '(',
  ']': '[',
  '}': '{'
};
const stack = new Stack();
let result = 'True';
let i = 0;
while (i < data.length) {
  let x = data[i];
  if (!vocab[x]) {
    //open
    stack.push(x)
  } else {
    if (stack.isEmpty()) {
      result = 'False';
      break
    }
    let p = stack.pop();
    if (vocab[x]!=p) {
      result = 'False';
      break
    }
  }
  i++;
}
if (!stack.isEmpty()) {
  result = 'False';
}
console.log(result)
