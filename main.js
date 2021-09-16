let index = -1

function getColor() {
    index++
    if (index > arguments.length - 1) {
        index = 0
    }
    return arguments[index]
}
getColor('red', 'yellow', 'green')