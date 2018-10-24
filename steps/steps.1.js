//given number n, return steps and level
// example: n =3;
//result:
/*
[
    '#  ',
    '## ',
    '###'
]
*/
let result = [];
function steps(n, i = 1) {
    if (n < i){
        console.log(result);
        return result;
    } 
    // console.log('#'.repeat(i) + ' '.repeat(n - i));
    result.push('#'.repeat(i) + ' '.repeat(n-i));
    steps(n, i + 1);
   }

steps(3);
steps(10);
module.exports = steps;