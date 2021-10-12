
const str1 = 'xtkpx';
const str2 = 'xkctpx';

const str = (str1+str2).split('');
const set = new Set();
str.forEach(letter=> set.has(letter) ? set.delete(letter) : set.add(letter));

console.log(set.values().next().value);