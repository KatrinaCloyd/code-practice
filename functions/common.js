//leet code challenge 

const common = (nums) => {
    const m = nums.length / 2;
    const checked = [];
    for (let i = 0; i < nums.length; i++) {
        if (!checked.includes(nums[i])) {
            const count = nums.filter(e => (e === nums[i])).length;
            if (count >= m) {
                return nums[i];
            } else {
                checked.push(nums[i]);
            }
        }
    }
};

module.exports = common;



// CAMERONS OBJECT APPROACH 
// var majorityElement = function(nums) {
// const numInstances = {};
// for(i = 0; i < nums.length; i++) {
//     if(numInstances[nums[i]]) {
//         numInstances[nums[i]] += 1;
//     } else {
//         numInstances[nums[i]] = 1;
//     }
//     if(numInstances[nums[i]] > (nums.length /2)) {
//         return nums[i];
//     }
// }
// };
