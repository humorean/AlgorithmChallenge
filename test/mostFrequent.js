const assert = require('assert'); //assert is a mocha function
const mostFrequent = require('../mostFrequent/mostFrequent');


describe('mostFrequent', function(){
  it('The result mode should be f', function(){
    assert.equal(mostFrequent('abbbbafffffffggh'), 'f');
  });

  it('The result mode should be G', function(){
    assert.equal(mostFrequent('I love Seattle and the Great Giant Games in 200 GGGGGGG'), 'G');
  });

  it('The result mode should be 0', function(){
    assert.equal(mostFrequent('Took me 20 sec, but it will take you and 10000000000000 years'), '0');
  });
});
