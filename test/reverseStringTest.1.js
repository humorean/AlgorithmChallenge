const assert = require('assert'); //assert is a mocha function
const reverseString = require('../reverseString/reverseString.1.js');


describe('reverseString1', function(){
  it('The app should return a reversed string', function(){
    assert.equal(reverseString('helloWorld'), 'dlroWolleh');
  });

  it('The app should return a reversed string redrum', function(){
    assert.equal(reverseString('murder'), 'redrum');
  });
});
