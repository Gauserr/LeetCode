/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let totalIslands = 0
    const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false))
    for (let r = 0; r < grid.length; r++)
        for (let c = 0; c < grid[0].length; c++)
            if (isNewIsland(grid, r, c, visited))
                totalIslands+=1
    return totalIslands
};

const isNewIsland = (grid, row, col, visited) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
        return false
    if (visited[row][col] === true) return false
    visited[row][col] = true
    if (grid[row][col] === '0') return false

    const neighbors = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
    ]

    for (let [r, c] of neighbors)
        isNewIsland(grid, r, c, visited)
    return true
}