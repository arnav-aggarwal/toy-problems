/**
Character Frequency
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

Examples
Input Output
"aaabbc"  [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
"mississippi" [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
""  [ ]
 */

const characterFrequency = str => Object.entries(str.split('').reduce((chars, ch) => {chars[ch] = chars[ch] + 1 || 1; return chars;}, {})).sort((a, b) => b[1] - a[1] || a[0].charCodeAt(0) - b[0].charCodeAt(0));
//stop bragging, zak. no one wants to decipher your ternary. :)
