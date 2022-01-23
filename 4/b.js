const q = 1000
const r = 123987123;

function stringPolyHash(str, q, r) {
  const data = str.split('').map(x => x.charCodeAt(0));
  return data.reduce((acc, x) => (acc * q + x) % r, 0);
}

function makeid(length) {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

let i = 0;
let cache = {}
while (i < 10000000) {
  let str = makeid(20);
  let hash = stringPolyHash(str, q, r);
  if (cache[hash]) {
    console.log(cache[hash], str)
    break;
  } else {
    cache[hash] = str;
  }
  i++;
}