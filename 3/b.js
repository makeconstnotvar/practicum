const vocab = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

function cartesian(...arrays) {
  const result = [];
  const recursion = (tuplePart) => {
    if (tuplePart.length === arrays.length) {
      result.push(tuplePart);
    } else {
      const array = arrays[tuplePart.length];
      for (const element of array) {
        const tuplePartWithNewElement = tuplePart.concat([element]);
        recursion(tuplePartWithNewElement);
      }
    }
  };
  recursion([]);
  return result;
}
const nums = '23'.split('');
const data = nums.map(x => vocab[x]);
console.log(cartesian(...data).map(x=>x.join('')).join(' '));
