function sort(data) {
  let counter = {
    '0': 0,
    '1': 0,
    '2': 0
  };
  for (let i = 0; i < data.length; i++) {
    counter[data[i]]++
  }
  return Object.values(counter).reduce((acc, val, i) => acc.concat(new Array(val).fill(i)), []);
}

const result = sort('0 2 1 2 0 0 1'.split(' ').map(x => +x));
console.log(result);