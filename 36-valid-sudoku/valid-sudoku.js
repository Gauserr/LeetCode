/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const columns = {}
    const rows = {}
    const squares = {}
    for (let i = 0; i < board.length; i++) {
        columns[i] = new Set()
        for (let j = 0; j < board[0].length; j++){
            const value = board[i][j]
            if (value === '.') continue

            if (!rows[j]) rows[j] = new Set()
            const squareCoordinates = `${parseInt(i/3)},${parseInt(j/3)}`
            if (!squares[squareCoordinates]) squares[squareCoordinates] = new Set()

            if (squares[squareCoordinates].has(value))
                return false
            squares[squareCoordinates].add(value)

            if (columns[i].has(value))
                return false
            columns[i].add(value)
            
            if (rows[j].has(value))
                return false
            rows[j].add(value)
        }
    }
    return true
};