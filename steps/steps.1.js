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
function steps(n){
    let m = 0;
    let result = [];
    
    //base case:
    if(m==n){
        return;
    }
    result
    steps(n-1);

}

steps(3);
steps(100);
module.exports = steps;