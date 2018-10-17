const assert = require('assert');
const sentenceCapitalization = require('../sentenceCapitalization/sentenceCapitalization');


describe('sentenceCapitalization', function(){
    it('The app should return a sentence with all words Capitalized', function(){
      assert.equal(sentenceCapitalization('hey that is my car!'), 'Hey That Is My Car!');
    });
  
    it('Thhe app should return a sentence with all words Capitalized', function(){
      assert.equal(sentenceCapitalization('what have you done mate?'), 'What Have You Done Mate?');
    });

    it('Thhe app should return a sentence with all words Capitalized', function(){
        assert.equal(sentenceCapitalization('not just anything, i would like my story to be told: I am just a boy'), 'Not Just Anything, I Would Like My Story To Be Told: I Am Just A Boy');
      });
  });