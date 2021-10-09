const data = 'A man, a plan, a canal: Panama';

let i = 0, j = data.length-1, result = 'True';

while (j > i) {
  while (!isValid(data[i]))
    i++;
  while (!isValid(data[j]))
    j--;
  if (data[i].toLowerCase() != data[j].toLowerCase()) {
    result = 'False';
    break;
  }
  i++;
  j--;
}
console.log(result)
function isValid(letter) {
  return /[A-Za-z0-9_]/.test(letter)
}
