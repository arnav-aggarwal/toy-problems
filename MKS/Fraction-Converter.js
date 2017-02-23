/*
Fraction Converter
Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
Whole numbers and mixed fractions should be returned as improper fractions.

Examples
Input Output
number:
0.5 "1/2"
number:
3 "3/1"
number:
2.5 "5/2"
number:
2.75  "11/4"
 */


function fractionConverter(num, den = 1) {
  let precision = (''+num).length - (''+num).indexOf('.') - 1;
  let count  = 0;
  
  while(num%1){
    count++;
    num = (num * 10).toFixed(precision - count);
    den= (den*10).toFixed(precision - count);
  }

  let prevNum = num;
  do{
    prevNum = num;
    if(num > 0) {
      for(let i = 2; i <= num; i++){
        if(!(num%i) && !(den%i)){
          num/=i;
          den/=i;
          break;
        }
      }
    } else {
      for(let i = -2; i >= num; i--){
        if(!(num%i) && !(den%i)){
          console.log(num,den)
          num/= (i* -1);
          den/= (i*-1);
          console.log(num,den)
          break;
        }
      }
    }
  }while(prevNum!==num);
  
  return('' + num + '/' + den);
}
