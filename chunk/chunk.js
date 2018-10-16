// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(a,n) {
    let r =[];
    for (let i = 0; i<a.length; i++){
        if((i+1)%n == 0){
            r.push(a.slice(Math.abs(n-i-1),((i+1)/n)*n));
        }
    }
    if(a.length%n !==0){
        r.push(a.slice(a.length-a.length%n,a.length));
    }
    console.log(r);
}

chunk([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 21);

module.exports = chunk;