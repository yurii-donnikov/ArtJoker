let index = -1

function getColor() {
    index++
    if (index > arguments.length - 1) {
        index = 0
    }
    return arguments[index]
}
getColor('red', 'yellow', 'green')

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
