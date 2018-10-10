const assert = require('assert'); //assert is a mocha function
const f = require('../fizzBuzz/fizzBuzz');

var result = [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzBuzz'];
var fizzBuzz = f(15);

describe('fizzBuzz', function(){

  it('The result should match', function(){
    for (let i = 0; i<fizzBuzz.length; i++) {
      assert.equal(fizzBuzz[i], result[i]);
    }
  });

});
