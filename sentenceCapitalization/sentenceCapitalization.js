/*
*Write a function that accepts a string then 
*capitalize the first letter of each word in the string 
*then return the capitalized string.
*/

function sentenceCapitalization(str) {
    let capWords =[];
    for (let word of str.split(' ')){
        let capWord = word[0].toUpperCase()+word.slice(1,word.length);
        capWords.push(capWord);
    }
    console.log(capWords.join(' '));
    return capWords.join(' ');
}

sentenceCapitalization('not just anything, i would like my story to be told: I am just a boy');

module.exports = sentenceCapitalization;