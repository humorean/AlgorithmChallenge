const assert = require('assert'); //assert is a mocha function
const reverseInt = require('../reverseInt/reverseInt');


describe('reverseInt', function(){
  it('Reverse a nevgative number', function(){
    assert.equal(reverseInt('-4001'), -1004);
  });

  it('The result should be false when int is not mirrored', function(){
    assert.equal(reverseInt('9566'), 6659);
  });

  it('leading zero does not count', function(){
    assert.equal(reverseInt('9000'), 9);
  });
});
