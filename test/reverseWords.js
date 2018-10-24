const assert = require('assert');
const reverseWords = require('../reverseWords/reverseWords');

describe('reverseWords', ()=>{
    it('it should return foo am I', ()=>{
        assert.equal(reverseWords('I am foo'),'foo am I');
    })

    it('it should return you are bar and poo', ()=>{
        assert.equal(reverseWords('poo and bar are you'),'you are bar and poo');
    })
})