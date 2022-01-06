let map = new Map();

function count(name) {
  let val = map.get(name) || 0;
  map.set(name, ++val);
}

count('a')
count('a')
count('b')
let iterator = map.keys();
for (let x of iterator) {
  console.log(x)
}

console.log(1)