let haveMatrix = [
    [9, 3, 0],
    [9, 0, 5],
    [8, 1, 5],
    [7, 0, 5],
];
for (let i = 0; i < haveMatrix.length; i++) {
    for (let j = 0; j < haveMatrix[i].length; j++) {
        if (haveMatrix[i][j] == 0) {
            haveMatrix.splice(i, 1);
        };
    };
};
console.log(haveMatrix);
