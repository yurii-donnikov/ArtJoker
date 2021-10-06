// lesson1;
function resultMonogramma (wordOne, wordTwo) {
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
    if(arrayWordTwo.length == 0) {
        return true;
    } else {
        return false;
    };
};
// lesson 3;
function getNumberDigits (number) {
    let resultObject = {};
    let numberArray = ('' + number).split('');
    for (let i = 0; i < numberArray.length; i++) {
        let counterNumber = 0;
        for (let j = 0; j < numberArray.length; j++) {
            if (numberArray[i] != numberArray[j]) {
                continue;
            } else counterNumber++;
        };
        resultObject[`${numberArray[i]}`] = `${counterNumber}`;
    };
    return resultObject;
};
// lesson 4;
function getSumUniqueWord (offer, word) {
    let counter = 0;
    let arrayOffer = offer.split(' ');
    for (let i = 0; i < arrayOffer.length; i++) {
        if (word == arrayOffer[i] ) {
            counter++;
        };
    };
    return counter;
};
// lesson5
function getNumberWord (offer) {
    let resultObject = {};
    let counter = 0;
    let arrayOffer = offer.split(' ');
    for (let i = 0; i < arrayOffer.length; i++) {
        let counter = 0;
        for(let j = 0; j < arrayOffer.length; j++) {
            if(arrayOffer[i] != arrayOffer[j]) {
                continue;
            } else counter++;
        };
        resultObject[arrayOffer[i]] = counter;
    };
    return resultObject;
};
// lesson9;
function countAllElem (array) {
    let result = 0;
    array.forEach(i => {
        result += i;
    }); 
    return result;
};
function countElemEqualTwo (array) {
    let result = 0;
        array.forEach(i => {
        if (i % 2 == 0) {
            result += i;
        };
    });
    return result;
};
function countElemEqualThree (array) {
    let result = 0;
    array.forEach(i => {
        if (i % 3 == 0) {
            result += i;
        };
    });
    return result;
};
function countElemPositiveNumber (array) {
    let result = 0;
    array.forEach(i => {
        if (i > 0) {
            result += i;
        };
    });
    return result;
};
function countElemOddNumber (array) {
    let result = 0;
    array.forEach(i => {
        if (i % 2 != 0) {
            result += i;
        };
    });
    return result;
};
