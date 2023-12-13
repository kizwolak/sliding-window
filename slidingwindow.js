/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let collection = [];
    let temp = [];
    let count = 0;
    let iteration = 0;
    for (let i = iteration; i <= nums.length; i++) {
        if (i === nums.length + 1) break;
        if (count !== k) {
            temp.push(nums[i])
            count++;
        } else {
            let max = 0;
            for (number of temp) {
                if (number > max) {
                    max = number;
                }
            }
            iteration += 1;
            collection.push(max);
            temp = [];
            count = 0;
            i = iteration
            i--;
        }
    }
    console.log(collection);
};

maxSlidingWindow([1,-1], 1)