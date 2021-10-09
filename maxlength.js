const data = "frog jumps from riverd";
let max = '', current = '', len = data.length;
for (let i = 0; i <= len; i++) {
  let cursor = data[i];
  if (cursor == ' ' || i == len) {
    if (current.length > max.length) {
      max = current;
    }
    current = ''
  } else {
    current += cursor;
  }
}
console.log(max)