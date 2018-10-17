//Tell if a two strings are anagram, ignoring capitals and punctuations
function anagram1(A,B) {
    const a = cleanStr(A);
    const b = cleanStr(B);;

    return a==b?true:false;
}

//HELP FUNCTION: to create a sorted clean string
function cleanStr(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}


module.exports = anagram1;