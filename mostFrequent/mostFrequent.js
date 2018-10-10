//return the most frequent used character in a string;
function mostFrequent(str){
    let a = str.split('');
    let b = a.reduce((count, char)=>{
        count.hasOwnProperty(char)?count[char]++:count[char]=1
        return count;
    },{});
    //above will return an object: {'a':5, 'b':4, 'c':1}

    let max = 0, maxChar = '';
    for (let char in b){
        if(b[char]>=max){
            max=b[char];
            maxChar=char;
        }
    }
    return maxChar;
}

module.exports = mostFrequent;
