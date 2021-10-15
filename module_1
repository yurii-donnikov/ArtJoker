//les1
function resultMonogramma(wordOne, wordTwo) {
    let arrayWordOne = wordOne.split('');
    let arrayWordTwo = wordTwo.split('');
    if (arrayWordOne.length == arrayWordTwo.length) {
        for (let i = 0; i < arrayWordOne.length; i++) {
            for (let j = 0; j < arrayWordTwo.length; j++) {
                if (arrayWordOne[i] == arrayWordTwo[j]) {
                    arrayWordTwo.splice(j, 1);
                };
            };
        };
    } else {
        return false;
    };
    if (arrayWordTwo.length == 0) {
        return true;
    } else {
        return false;
    };
};
