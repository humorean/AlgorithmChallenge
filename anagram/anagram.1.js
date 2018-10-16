//Tell if a two strings are anagram, ignoring capitals and punctuations
function anagram(A,B) {
    const a = cleanStr(A);
    const b = cleanStr(B);

    console.log(a);
    console.log(b);

    return a==b?true:false;
}

//HELP FUNCTION: to create a sorted clean string
function cleanStr(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

anagram('AAplo', 'plaao'); //true
anagram('BOX', 'XOBb'); //false
anagram('BOX', 'XOBp'); //false

module.exports = anagram;