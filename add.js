
function add (str1, str2) {
  str1=str1.split("");
  str2=str2.split("");
  let result = ""; // Результат
  let flag=0;
  while(str1.length||str2.length||flag){
    flag+=~~str1.pop()+~~str2.pop();
    result=flag%10+result;
    flag=flag>9;
  }
  return result.replace(/^0+/, '');
}
console.log(add('12000','34'))