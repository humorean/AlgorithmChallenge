function palindrome(str) {
    // return str.split('').reduce((rev, char)=>char+rev,'')==str;
    return str.split('').every((char,i)=>char == str[str.length-1-i])
}

module.exports = palindrome;