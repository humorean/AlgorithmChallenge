//return the most frequent used character in a string.  
//Create object of character and frequency count of that string (Character Map)
/* Use this method for:
* most common character of a string;
* does string A has same character as string B (anagram);
* does string has any repeated characters in it.  
*/
function mostFrequent(str){

    let chars ={};
    for (let char of str) {
        chars[char] = chars[char] + 1 || 1;
    }

    let max = 0, maxChar = '';
    for (let char in chars){
        if(chars[char]>=max){
            max=chars[char];
            maxChar=char;
        }
    }
    // let a = str.split('');
    // let b = a.reduce((count, char)=>{
    //     count.hasOwnProperty(char)?count[char]++:count[char]=1
    //     return count;
    // },{});
    // //above will return an object: {'a':5, 'b':4, 'c':1}

    // let max = 0, maxChar = '';
    // for (let char in b){
        // if(b[char]>=max){
        //     max=b[char];
        //     maxChar=char;
        // }
    // }
    return maxChar;
}

module.exports = mostFrequent;
