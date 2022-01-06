const str = 'abc';
const data = 'ahbgdcu'

function search(data, str) {
  if (data.length == 0)
    return 'True';
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (str[counter] == data[i]) {
      counter++;
      if (counter == str.length)
        return 'True';
    }
  }
  return 'False';
}

search(data.split(''), str);