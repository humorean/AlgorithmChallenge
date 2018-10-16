// Given an input string, reverse the string word by word
// input: "sky is blue"
// output: "blue is sky"

function reverseWords(str){
    
    let words = str.split(' ');
    let onlyWords = []; //push to this array if the word is not a space

    for (let word of words){
        if(word !== ''){
            onlyWords.push(word);
        }
    }


    console.log(onlyWords.reverse().join(' '));
};

reverseWords(" I have a big tummy ");

module.exports = reverseWords;