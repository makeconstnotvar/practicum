const y = 3, x=0;
const matrix = [
  [1, 2, 3],
  [0, 2, 6],
  [7, 4, 1],
  [2, 7, 0]
];

const result = [];

result.push(matrix[y - 1] && matrix[y - 1][x])
result.push(matrix[y + 1] && matrix[y + 1][x])
result.push(matrix[y][x - 1])
result.push(matrix[y][x + 1])


console.log(result.filter(x => x != null).sort((a,b)=>a-b).join(' '));