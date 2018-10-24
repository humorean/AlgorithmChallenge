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
    let result = [];
    for(let i=0; i<n; i++){
        result[i] = renderPound(i+1,n-i-1);
    }
    console.log(result);
    return result;
}

//helper function to construct #s and spaces based on n
function renderPound(num,totalPlace){
    let pound ='';
    for(let j=0;j<num;j++){
        pound = pound + '#' || '#';
    }
    let spaces ='';
    for(let j=0;j<totalPlace;j++){
        spaces = spaces + ' ' || ' ';
    }
    return pound+spaces;
}
// renderPound(3);
steps(3);
steps(100);
module.exports = steps;