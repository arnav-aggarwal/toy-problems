//Given two strings, write a function to check if one is a permutation
//of the other.
//
//O(s1 + s2)

function checkPermutation(str1, str2) {
  if(typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('Inputs must be of type string');
  }

  if(str1.length !== str2.length) {
    return false;
  }

  const str1Chars = {};
  for(let i = 0; i < str1.length; i++) {
    const thisChar = str1.charAt(i);
    str1Chars[thisChar] = str1Chars[thisChar] + 1 || 1;
  }

  for(let j = 0; j < str2.length; j++) {
    const thisChar = str2.charAt(j);
    if(!str1Chars[thisChar]) {
      return false;
    }

    str1Chars[thisChar]--;
  }

  return true;
}

console.log(checkPermutation('asdf', 'dfas'));
console.log(checkPermutation('asdf', 'assd'));
console.log(checkPermutation('assdf', 'dfdas'));
console.log(checkPermutation('assdf', 'fdas'));
