/*

Number to English
Write a function numberToEnglish, it should take a number and return the number as a string using English words.

You've got Helpers! (click to view code)
numbersToWords //Object
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
numbersToPlace //Object
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};
Examples
Input Output
number:
7 "seven"
number:
575 "five hundred seventy-five"
number:
78193512  "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 */

function removeTrailingSpace(str) {
  while(str.charAt(str.length - 1) === ' ')
    str = str.slice(0, str.length - 1);
  
  return str;
}

function generateHundreds(revNum, place) {
  let words = '';
    
  //ones
  if(revNum[0] && revNum[0] !== '0')
    words += numbersToWords[revNum[0]];
  
  //tens
  if(revNum[1] === '1') 
    words = numbersToWords[revNum[1] + revNum[0]];
  else if (revNum[1] && revNum[1] !== '0') 
    words = numbersToWords[revNum[1] + '0'] + (words ? '-' + words : '');
  
  //hundreds
  if(revNum[2] && revNum[2] !== '0')
    words = numbersToWords[revNum[2]] + ' hundred ' + words;
  
  if(place && words) words += ' ' + place;
  
  return words + ' ';
}

function addToWords(str, revNum, place) {
  newStr = generateHundreds(revNum, place);
  revNum.splice(0, 3);
  return newStr + str;
}

function numberToEnglish (num) {
  if(num === 0) return 'zero';
  
  const reverseNum = ('' + num).split('').reverse();
  const places = ['', ...Object.values(numbersToPlace).slice(2)];
  
  let i = 0;
  let eng = '';
  
  while(reverseNum.length)
    eng = addToWords(eng, reverseNum, places[i++]);
  
  return removeTrailingSpace(eng).replace(/\s\s/, ' ');
}
