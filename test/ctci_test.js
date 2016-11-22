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
