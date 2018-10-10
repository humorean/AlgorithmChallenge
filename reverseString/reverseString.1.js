// Reverse a string using for loop append each char infront of new reversed string

module.exports = function(str){
    let rev = '';
    for (let char of str) {
        rev = char + rev;
    }
    return rev;
}