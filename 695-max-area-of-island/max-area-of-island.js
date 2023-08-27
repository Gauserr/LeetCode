/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid){
    let max = 0
    const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false))
    for (let r = 0; r < grid.length; r++)
        for (let c = 0; c < grid[0].length; c++){
            const total = checkArea(grid, r, c, visited)
            if (total > max) max = total
        }
    return max
};

const checkArea = (grid, r, c, visited) => {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return 0
    if (visited[r][c] === true) return 0
    visited[r][c] = true
    if (grid[r][c] === 0) return 0
    let sum = 1
    const neighbors = [
        [r-1, c],
        [r+1, c],
        [r, c-1],
        [r, c+1]
    ]
    for (let [row, col] of neighbors)
        sum+=checkArea(grid, row, col, visited)
    return sum
}