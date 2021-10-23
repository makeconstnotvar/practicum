const k = 1 * 2;
const nums = [1,9,9,9,5,4,3,6,4,3,6,8,1,7,1,2];
const counter = nums.reduce((acc, x) => {
  if (!acc[x]) {
    acc[x] = 1
  } else
    acc[x]++;
  return acc;
}, {});
const result = Object.values(counter).filter(x => x <= k).length;
console.log(result);


