function rotateRight(nums,k) {
    if (k <= 0) { return }
    nums.splice(0, 0, ...nums.splice(nums.length-k, k));//the second splice goes through length to beginning;
    console.log(nums);
}

rotateRight([1,2,4,5,6,7,8,9,10],3);

module.export = rotateRight;