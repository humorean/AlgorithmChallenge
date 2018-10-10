//given a number n, make an array of number from 1 to n 
//but when the number is divisible by 3 it prints fizz and by 5 prints buzz 
//if by both 3 and 5 will print fizz buzz

function fizzBuzz (n) {
    let r = [];
    for (let i = 1; i<=n; i++){
        if(i%3===0 && i%5===0){
            r.push('fizzBuzz');
        }
        else if(i%3===0){
            r.push('fizz');
        }
        else if(i%5===0){
            r.push('buzz');
        }
        else{
            r.push(i);
        }
    }
    return r;
}

module.exports = fizzBuzz;