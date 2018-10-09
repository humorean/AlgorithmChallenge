var assert = require('assert'); //assert is a mocha function
var reverseString = require('../reverseString/reverseString.js');


describe('App', function(){
  it('The app should return a reversed string', function(){
    assert.equal(reverseString('helloWorld'), 'dlroWolleh');
  });

  it('The app should return a reversed string redrum', function(){
    assert.equal(reverseString('murder'), 'redrum');
  });
});
