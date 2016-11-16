//Define a function that takes an array of strings, and returns
//the most commonly occurring string that array

function highestFrequency(arr) {
  const stringFrequency = {};
  let maxFrequency = 0;
  
  arr.forEach(function(str) {
    stringFrequency[str] = stringFrequency[str] + 1 || 1;
    maxFrequency = Math.max(maxFrequency, stringFrequency[str]);
  });
  
  const entries = Object.entries(stringFrequency);

  for(let i = 0; i < entries.length; i++) {
    const thisEntry = entries[i];
    if(thisEntry[1] === maxFrequency) {
      return thisEntry[0];
    }
  }
}
