// Reverse a string using reduce ES6 solution

module.exports = function(str){
    return str.split('').reduce((rev,char)=> char+rev,'');

}