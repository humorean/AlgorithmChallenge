//Tell if a two strings are anagram, ignoring capitals and punctuations
function anagram(A,B) {
    const a = charMap(A);
    const b = charMap(B);

    // if object size is not equal then return false
    if(Object.keys(a).length !== Object.keys(b).length){
        return false;
    }else{
        for(let p in a){
            if(a[p] !== b[p]){
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


module.exports = anagram;