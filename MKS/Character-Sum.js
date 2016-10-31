/**
Character Sum
Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.

Examples
Input Output
"123" 6
"0101"  2
"so cool!!1!" 1
 */

const charSum = s => s.match(/[1-9]/g).reduce((n, d) => n + Number(d), 0);
