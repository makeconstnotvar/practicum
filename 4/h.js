const A = Array.from('mxyskaoghii');
const B = Array.from('qodfrgmslcm');
const len = A.length > B.length ? A.length : B.length;
const mapA = {};
const mapB = {};
let result = 'YES';

for (let i = 0; i < len; i++) {
  const a = A[i];
  const b = B[i];
  if (mapA[a] && mapA[a] != b || mapB[b] && mapB[b] != a) {
    result = 'NO';
    break;
  } else {
    mapA[a] = b;
    mapB[b] = a;
  }
}//
console.log(result)