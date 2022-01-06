const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin
});

const lines = [];

reader.on('line', line => {
  if (line) {
    const data = line.split(' ');
    if (data.lenght == 2) {
      lines.push(line.map((val, i) => i == 0 ? val : +val));
    }
  }
})

process.stdin.on('end', resolve);

function resolve() {

  const result = quickSort(lines);
  result.forEach(x => console.log(x));

}

function swap(arr, left, right) {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp;
}

function sort(data, low, high) {
  let pivot = data[high];
  let idx = low;

  for (let i = low; i < high; i++) {
    if (customSort(data[i], pivot)) {
      swap(data, idx, i);
      idx++;
    }
  }

  swap(data, idx, high);

  return idx;
}

function quickSort(data) {
  let stack = [];
  let start = 0;
  let end = data.length - 1;

  stack.push({x: start, y: end});

  while (stack.length) {
    const {x, y} = stack.shift();
    const idx = sort(data, x, y);

    if (idx - 1 > x) {
      stack.push({x: x, y: idx - 1});
    }

    if (idx + 1 < y) {
      stack.push({x: idx + 1, y: y});
    }
  }

  return data;
}

function customSort([aName, aPoints, aFine], [pName, pPoints, pFine]) {
  if (aPoints == pPoints && aFine == pFine)
    return aName <= pName;
  if (aPoints == pPoints)
    return aFine <= pFine;
  return aPoints >= pPoints;
}
