/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let l = 0
    let r = height.length - 1
    while (l < r){
        const area = (r - l) * Math.min(height[l], height[r])
        if (area > max) max = area
        if (height[l] === height[r] || height[l] < height[r]) l++
        else r--
    }
    return max
};