const childs = '2 1 3'.split(' ').map(x => +x).sort((a, b) => b - a);
const cookies = '1 1'.split(' ').map(x => +x).sort((a, b) => a - b);

function counter(childs, cookies) {
  let results = 0;
  const childsCount = childs.length;
  for (let i = 0; i < cookies.length; i++) {
    if (childs.length == 0 || results == childsCount)
      break;
    if (cookies[i] >= childs[childs.length-1]) {
      childs.pop();
      results++;
    }
  }
  return results;
}

console.log(counter(childs, cookies));