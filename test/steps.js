const assert = require('assert'); //assert is a mocha function
const steps = require('../steps/steps');
const stepsRecursive = require('../steps/stepsRecursive');

describe('steps', function(){
    //test case 1: make steps for 3 level: steps(3)
    it('make steps for 1 level', function(){
        let test1 = steps(3);
        assert.equal(test1[0], '#  ');
        assert.equal(test1[1], '## ');
        assert.equal(test1[2], '###');
    });

    it('make steps for 6 level', function(){
        let test2 = steps(6);
        assert.equal(test2[0], '#     ');
        assert.equal(test2[1], '##    ');
        assert.equal(test2[2], '###   ');
        assert.equal(test2[3], '####  ');
        assert.equal(test2[4], '##### ');
        assert.equal(test2[5], '######');
    });

    //Test for steps.1.js for recursive 
    it('make steps for 1 level', function(){
        let test3 = stepsRecursive(3);
        assert.equal(test3[0], '#  ');
        assert.equal(test3[1], '## ');
        assert.equal(test3[2], '###');
    });

    it('make steps for 6 level', function(){
        let test4 = stepsRecursive(6);
        assert.equal(test4[0], '#     ');
        assert.equal(test4[1], '##    ');
        assert.equal(test4[2], '###   ');
        assert.equal(test4[3], '####  ');
        assert.equal(test4[4], '##### ');
        assert.equal(test4[5], '######');
    });
});
