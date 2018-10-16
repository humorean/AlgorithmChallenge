//Tell if a two strings are anagram, ignoring capitals and punctuations
function anagram(A,B) {
    const a = charMap(A);
    const b = charMap(B);

    console.log(a);
    console.log(b);
    // if object size is not equal then return false
    if(Object.keys(a).length !== Object.keys(b).length){
        return false;
    }else{
        for(let p in a){
            if(b[p] !== b[p]){
                return false;
            }
        }
    }
    return true;
}

//HELP FUNCTION: to create character map based on given string
function charMap(str) {
    let map={};
    for(char of str.replace(/[^\w]/g,'').toLowerCase()){
        map[char] = map[char] +1 || 1;
    }
    return map;
}

anagram('AAplo', 'plaao'); //true
anagram('BOX', 'XOBb'); //false
anagram('BOX', 'XOBp'); //false

module.exports = anagram;