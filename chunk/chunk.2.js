// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//APPROACH: increase the loop by adding size

function chunk(a,n) {
    let r =[];
    let index = 0;

    while(index < a.length){
        r.push(a.slice(index, index+size));
        index += size;  //HERE the index is increased by the size input. 
    }
    console.log(r);
}

chunk([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 21);

module.exports = chunk;