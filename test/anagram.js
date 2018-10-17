const assert = require('assert');
const anagram = require('../anagram/anagram');

describe('anagram', function(){
    it('This should return true', function(){
        assert.equal(anagram('aabbcc', 'BBcaCA'),true);
    });

    it('This should return false', function(){
        assert.equal(anagram('aabbcc', 'aabbccc'),false);
    });

    it('This should return true', function(){
        assert.equal(anagram('I am the sh*t', 'amI hte sh***&&&*T'),true);
    });

    it('This should return true', function(){
        assert.equal(anagram('I am the sh1t', 'amI hte sh***&&&*T'),false);
    })
})