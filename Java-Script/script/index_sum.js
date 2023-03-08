/*var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2, 7, 12, 10, 11],9))*/

var twosum = [2, 7, 11, 15, 10];
var target = 9;
for (var i = 0; i <= twosum.length ; i++) {
    for (var j = i+1; j <= twosum.length; j++) {
        if (twosum[i] + twosum[j] == target) {
            var index_position = [i, j];
        }
    }
}
console.log(index_position);