const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('Is Unique (Cracking the Coding Interview 1.1)', function() {
  function runQueueTests(isUnique, description, x) {
    fn = x ? xit : it;
    fn(description, function() {
      expect(isUnique('')).to.be.true;
      expect(isUnique('a')).to.be.true;
      expect(isUnique('asdfghjkl')).to.be.true;
      expect(isUnique('thmil kda')).to.be.true;
      expect(isUnique('aasdfghjkl')).to.be.false;
      expect(isUnique('asdfgahjkl')).to.be.false;
      expect(isUnique('asdf ghj kl')).to.be.false;
    });
  }

  const { 
    isUnique1: isUniqueSet,
    isUnique2: isUniqueBitVector,
    isUnique3: isUniqueSimple 
  } = require('../ctci/1/is_unique.js');

  runQueueTests(isUniqueSet, 'Set implementation should return true and false correctly');
  runQueueTests(isUniqueBitVector, 'Bit vector implementation should return true and false correctly', true);
  runQueueTests(isUniqueSimple, 'Implementation with no extra data structures should return true and false correctly');
});

describe('Check Permutation (Cracking the Coding Interview 1.2)', function() {
  const checkPermutation = require('../ctci/1/check_permutation.js');
  it('Should return whether one string is a permutation of another', function() {
    expect(checkPermutation('', '')).to.be.true;
    expect(checkPermutation('asdf', 'asdf')).to.be.true;
    expect(checkPermutation('asdf', 'fdas')).to.be.true;

    expect(checkPermutation('asdf', 'aafd')).to.be.false;
    expect(checkPermutation('asdf', 'dfss')).to.be.false;
    expect(checkPermutation('asdf', 'asdfs')).to.be.false;

    expect(checkPermutation('qwertyuiopasdfghjkl', 'qlwkejrhtgyfudisoap')).to.be.true;
    expect(checkPermutation('qwertyuiopasdfghjklzxcvbnm', 'mqnwbevrctxyzulikojphagsfd')).to.be.true;
    expect(checkPermutation('qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm',
      'mqnwbevrctxyzulikojphagsfdmqnwbevrctxyzulikojphagsfdmqnwbevrctxyzulikojphagsfd')).to.be.true;
  });
});

describe('URLify (Cracking the Coding Interview 1.3)', function() {
  const URLify = require('../ctci/1/URLify.js');
  it('Should replace spaces with "%20"', function() {
    expect(URLify('')).to.equal('');
    expect(URLify('Hi there  ')).to.equal('Hi%20there');
    expect(URLify('Hi there cutie    ')).to.equal('Hi%20there%20cutie');
  });
});

describe('Palindrome Permutation (Cracking the Coding Interview 1.4)', function() {
  const pal = require('../ctci/1/palindrome_permutation.js');
  it('Should determine if a string is a permutation of a palindrome', function() {
    expect(pal('')).to.be.false;
    expect(pal('a')).to.be.true;
    expect(pal('ab')).to.be.false;
    expect(pal('abcab')).to.be.true;
    expect(pal('zaa  zbbzcc zddz')).to.be.true;
    expect(pal('zaa  zbbzcc zdddz')).to.be.false;
    expect(pal(`[]%&^*(*asdfqrt yuiopdghjkl;wtu
      yiop[dbnvmm,.(&^%$))])[]%&^*(*a sdfqrtyui
      opdghjkl;wtuyiop[db nvmm,.(&^% $))])`)).to.be.true;
  });
});

describe('One Away (Cracking the Coding Interview 1.5)', function() {
  const oneAway = require('../ctci/1/one_away.js');
  it('Should return true for identical strings', function() {
    expect(oneAway('', '')).to.be.true;
    expect(oneAway('a', 'a')).to.be.true;
    expect(oneAway('abcd', 'abcd')).to.be.true;
  });

  it('Should pass a single substitution', function() {
    expect(oneAway('a', 'X')).to.be.true;
    expect(oneAway('abcd', 'abXd')).to.be.true;
    expect(oneAway('abcdefg', 'Xbcdefg')).to.be.true;
    expect(oneAway('abcdefg', 'abcdefX')).to.be.true;
  });

  it('Should fail multiple substitutions', function() {
    expect(oneAway('ab', 'XY')).to.be.false;
    expect(oneAway('abcd', 'aXYd')).to.be.false;
    expect(oneAway('abcdefg', 'XYcdefg')).to.be.false;
    expect(oneAway('abcdefg', 'abcdeXY')).to.be.false;
    expect(oneAway('abcdefg', 'aXcYdeg')).to.be.false;
    expect(oneAway('abcdefg', 'XbcdefY')).to.be.false;
  });

  it('Should pass a single addition', function() {
    expect(oneAway('', 'X')).to.be.true;
    expect(oneAway('abcd', 'abXcd')).to.be.true;
    expect(oneAway('abcd', 'Xabcd')).to.be.true;
    expect(oneAway('abcd', 'abcdX')).to.be.true;
  });

  it('Should fail multiple additions', function() {
    expect(oneAway('ab', 'aXYb')).to.be.false;
    expect(oneAway('abcd', 'aXbYcd')).to.be.false;
    expect(oneAway('abcdefg', 'XYabcdefg')).to.be.false;
    expect(oneAway('abcdefg', 'abcdefgXY')).to.be.false;
    expect(oneAway('abcdefg', 'XabcdefgY')).to.be.false;
  });

  it('Should pass a single deletion', function() {
    expect(oneAway('X', '')).to.be.true;
    expect(oneAway('abXc', 'abc')).to.be.true;
    expect(oneAway('abcX', 'abc')).to.be.true;
    expect(oneAway('Xabc', 'abc')).to.be.true;
  });

  it('Should fail multiple deletions', function() {
    expect(oneAway('XY', '')).to.be.false;
    expect(oneAway('aXYb', 'ab')).to.be.false;
    expect(oneAway('abXY', 'ab')).to.be.false;
    expect(oneAway('XYab', 'ab')).to.be.false;
  });
});

describe('String Compression (Cracking the Coding Interview 1.6)', function() {
  const strComp = require('../ctci/1/string_compression.js');
  it('Should compress a string', function() {
    expect(strComp('aaa')).to.equal('a3');
    expect(strComp('AAA')).to.equal('A3');
    expect(strComp('aaabb')).to.equal('a3b2');
    expect(strComp('aaaabba')).to.equal('a4b2a1');
    expect(strComp('aaaaBBbbabb')).to.equal('a4B2b2a1b2');
    expect(strComp('aaAAAbbBBaaAA')).to.equal('a2A3b2B2a2A2');
  });

  it('Should return the original string if smaller or the same size', function() {
    expect(strComp('')).to.equal('');
    expect(strComp('a')).to.equal('a');
    expect(strComp('aa')).to.equal('aa');
    expect(strComp('aA')).to.equal('aA');
    expect(strComp('aaAA')).to.equal('aaAA');
    expect(strComp('aAaAAAbbBBaaAA')).to.equal('aAaAAAbbBBaaAA');
  });
});

describe('Rotate Matrix (Cracking the Coding Interview 1.7)', function() {
  const rotateMatrix = require('../ctci/1/rotate_matrix.js');

  function generateMatrix(n) {
    const mat = [];
    for(let i = 0; i < n; i++) {
      mat.push([]);
    }
    
    mat.forEach(function(row, i) {
      for(let index = 0; index < n; index++) {
        row.push(i)
      }
    })
    
    return mat;
  }

  function deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  const mat1 = [[0]];

  const mat2 = [[0, 1], [2, 3]];
  const mat2R = [[2, 0], [3, 1]];

  const mat3 = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  const mat3Copy = deepCopy(mat3);
  const mat3R = [[6, 3, 0], [7, 4, 1], [8, 5, 2]];

  it('Should rotate square matrices of n <= 3', function() {
    expect(rotateMatrix(mat1)).to.eql(mat1);
    expect(rotateMatrix(mat2)).to.eql(mat2R);
    expect(rotateMatrix(mat3)).to.eql(mat3R);
    expect(rotateMatrix(rotateMatrix(rotateMatrix(mat3)))).to.eql(mat3Copy);
  });

  const mat4 = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
  const mat4Copy = deepCopy(mat4);
  const mat4R = [[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]]

  const mat9 = generateMatrix(9);
  const mat9Copy = deepCopy(mat9);
  const mat9R = [ 
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
  ];

  const mat20 = generateMatrix(20);
  const mat20Copy = deepCopy(mat20);
  const mat20R = [ 
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ],
    [ 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
  ];

  it('Should rotate square matrices of n > 3', function() {
    expect(rotateMatrix(mat4)).to.eql(mat4R);
    expect(rotateMatrix(rotateMatrix(rotateMatrix(mat4)))).to.eql(mat4Copy);
    expect(rotateMatrix(mat9)).to.eql(mat9R);
    expect(rotateMatrix(rotateMatrix(rotateMatrix(mat9)))).to.eql(mat9Copy);
    expect(rotateMatrix(mat20)).to.eql(mat20R);
    expect(rotateMatrix(rotateMatrix(rotateMatrix(mat20)))).to.eql(mat20Copy);
  });
});
