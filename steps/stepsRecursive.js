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
function stepsRecursive(n, i = 1) {
    if (n < i){
        console.log(result);
        return result;
    } 
    // console.log('#'.repeat(i) + ' '.repeat(n - i));
    result.push('#'.repeat(i) + ' '.repeat(n-i));
    stepsRecursive(n, i + 1);
   }

stepsRecursive(3);
stepsRecursive(10);
module.exports = stepsRecursive;