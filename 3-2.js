let counter = 0;

function swap(arr, left, right) {
  //console.log(arr[left],arr[right]);
  counter++;
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
  console.log(pivot, data, idx)
  return idx;
}

function quickSort(data) {
  let x = []
  let stack = new Proxy(x, {
    get(target, prop) {
      if (prop === 'push') {
        return (...args) => {
          console.log('push', ...args);
          return target[prop](...args);
        };
      }
      if (prop === 'shift') {
        return (...args) => {
          let value = target[prop](...args)
          console.log('shift', value);
          return value;
        };
      }
      return target[prop];
    }
  });
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

function customSort(a, b) {
  return a < b
}

function customSort1([aName, aPoints, aFine], [pName, pPoints, pFine]) {
  if (aPoints == pPoints && aFine == pFine)
    return aName <= pName;
  if (aPoints == pPoints)
    return aFine <= pFine;
  return aPoints >= pPoints;
}

const data = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

console.log(data);
let sorted = quickSort(data);
console.log(sorted, counter);

