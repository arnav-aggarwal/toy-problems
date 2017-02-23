/*
Hexadecimal to Decimal
Build a function that converts a hexadecimal number to a base 10 number. Do not use toString or parseInt.

For more on hexadecimal numbers: https://en.wikipedia.org/wiki/Hexadecimal
 */

const hexToDec = (hex, map = {a:10, b:11, c:12, d:13, e:14, f:15}, digNum = 0) => hex.split('').reduceRight((num, dig) =>
    num + (isNaN(dig) ? map[dig] : dig) * 16 ** digNum++, 0);
