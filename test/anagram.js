const assert = require('assert');
const anagram = require('../anagram/anagram');
const anagram1 = require('../anagram/anagram.1.js');

describe('anagram', function(){
    it('This should return true', function(){
        assert.equal(anagram('aabbcc', 'BBcaCA'),true);
        assert.equal(anagram1('aabbcc', 'BBcaCA'),true);
    });

    it('This should return false', function(){
        assert.equal(anagram('aabbcc', 'aabbccc'),false);
        assert.equal(anagram1('aabbcc', 'aabbccc'),false);
    });

    it('This should return true', function(){
        assert.equal(anagram('I am the sh*t', 'amI hte sh***&&&*T'),true);
        assert.equal(anagram1('I am the sh*t', 'amI hte sh***&&&*T'),true);
    });

    it('This should return true', function(){
        assert.equal(anagram('I am the sh1t', 'amI hte sh***&&&*T'),false);
        assert.equal(anagram1('I am the sh1t', 'amI hte sh***&&&*T'),false); 
    })
})