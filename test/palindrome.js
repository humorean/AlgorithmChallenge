const assert = require('assert'); //assert is a mocha function
const palindrome = require('../palindrome/palindrome');


describe('palindrome', function(){
  it('The result should be true when string is mirrored', function(){
    assert.equal(palindrome('abbbba'), true);
  });

  it('The result should be false when string is not mirrored', function(){
    assert.equal(palindrome('abbbbac'), false);
  });
});
