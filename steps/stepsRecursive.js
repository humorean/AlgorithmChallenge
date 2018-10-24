function stepsRecursive(n) {

    recursive = (a, b=1, r=[]) =>{
        if (a < b){
            return r;
        } 
        r.push('#'.repeat(b) + ' '.repeat(a-b));
        return recursive(a, b + 1,r); //must return when calling the function as recursive!!
    }
    return recursive(n);  //must return for recursive
    
}

stepsRecursive(3);
stepsRecursive(10);
module.exports = stepsRecursive;