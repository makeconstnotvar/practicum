let x = 3;
let y = 4;
let matrix = [
  [1, 2, 3],
  [0, 2, 6],
  [7, 4, 1],
  [2, 7, 0]
]/*
let n = matrix.length;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < i; j++) {

    let temp = matrix[j][i];
    matrix[j][i] = matrix[i][j];
    matrix[i][j] = temp;

      console.log(1)
  }

}*/
const test = matrix[0]
const result = test.map((col, c) => {
  return matrix.map((row, r) => {
    return matrix[r][c]
  })
})
console.log(result)