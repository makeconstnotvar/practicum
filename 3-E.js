let money = 1000;
const prices = '350 999 200'.split(' ').sort((a, b) => a - b);

function buy(money, prices) {
  let results = 0;
  for (let i = 0; i < prices.length; i++) {
    if (+prices[i] <= money) {
      money -= prices[i];
      results++;
    } else {
      break;
    }
  }
  return results;
}

console.log(buy(money, prices));