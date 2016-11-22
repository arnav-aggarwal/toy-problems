/**
 * Cracking the Coding Interview: 1.5 One Away
 *
 * O(n)
 */

function oneAway(str1, str2) {
  //More than 1 addition/deletion
  if(Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let mutations = 0;

  for(let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
    if(str1.charAt(i) !== str2.charAt(j)) {
      mutations++;
      if(mutations > 1) {
        return false;
      }

      if(str1.length > str2.length) {
        j--;
      } else if(str1.length < str2.length){
        i--;
      }
    }
  }

  return true;
}

module.exports = oneAway;
