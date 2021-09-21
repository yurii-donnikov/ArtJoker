

let matrix = [
    [9, 3, 0],
    [9, 0, 5],
    [8, 1, 5],
    [7, 0, 5],
]

for (i = 0; i < matrix.length; i++) {
    for (index = 0; index < matrix.length; index++) {
        if (matrix[i][index] == 0) {
            matrix.splice(i, 1)
        }
    }
}
console.log(matrix)
