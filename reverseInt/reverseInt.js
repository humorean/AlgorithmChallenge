
function reverseInt(num) {
    // const sign = Math.sign(num); //returns 1 for positive num, -1 for negative num and 0 for 0;
    return Math.abs(num).toString().split('').reduce((rev,char)=>char+rev,'') * Math.sign(num);
}

module.exports = reverseInt;

