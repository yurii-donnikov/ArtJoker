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
// lesson10
function countRezoElem (array) {
    let result = 0;
    array.forEach(i => {
        if(i == 0) {
            result++;
        };
    });
    return result;
};
function countNegativeElem (array) {
    let result = 0;
    array.forEach(i => {
        if(i < 0) {
            result++;
        };
    });
    return result;
};
function countPositiveElem (array) {
    let result = 0;
    array.forEach(i => {
        if(i > 0) {
            result++;
        };
    });
    return result;
};
function countSimpleElem (array) {
    let result = 0;
    array.forEach(i => {
        if (i == 2) {
            result++;
        } else {
            if (i > 1 && i % 2 != 0) {
                result++;
            };
        };
    });
    return result;
};
// lesson12
function countAllElemDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            resultNum += j;
        })
        result[i] = resultNum;
        resultNum = 0;
    })
    return result;
};
function countElemEqualTwoDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j % 2 == 0) {
            resultNum += j;
            };
        })
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
function countElemPositiveDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j % 3 == 0) {
            resultNum += j;
            };
        })
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
function countElemPositiveDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j > 0) {
            resultNum += j;
            };
        })
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
function countElemOddDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j % 2 != 0)  {
            resultNum += j;
            };
        })
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
// les12.2
function countZeroElemDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j == 0)  {
            resultNum ++;
            };
        });
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
function countNegativeElemDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j < 0)  {
            resultNum ++;
            };
        });
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
function countPositiveElemDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j > 0)  {
            resultNum ++;
            };
        });
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
function countSimpleElemDubleArr (array) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j == 2)  {
            resultNum ++;
            } else {
                if (j > 1 && j % 2 != 0) {
                    resultNum++;
                };
            };
        });
        result[i] = resultNum;
        resultNum = 0;
    });
    return result;
};
// lesson 13
function getMinMaxValue (array) {
    let minNumber = array[0];
    let maxNumber = array[0];
    let result = 0;
    for (var i = 0; i < array.length; i++) {
        if (minNumber > array[i]) {
            minNumber = array[i];
        };
    };
    for (var i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
        };
    };
    for(let i = minNumber; i <= maxNumber; i++) {
        result += i;
    };
    return result;
};
function getMinMaxEqualThree (array){
    let arrayEqualThree = [];
    let minNumber = array[0];
    let maxNumber = array[0];
    let result = 0;
    array.forEach(i => {
        if (i % 3 == 0) {
            arrayEqualThree.push(i);
        }
    });
    for (var i = 0; i < array.length; i++) {
        if (minNumber > array[i]) {
            minResultNumber = array[i];
        };
    };
    for (var i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
        };
    };
    for(let i = minNumber; i <= maxNumber; i++) {
        result += i;
    };
   return result;
};
function getMinMaxPositiveNum (array){
    let arrayEqualThree = [];
    let minNumber = array[0];
    let maxNumber = array[0];
    let result = 0;
    array.forEach(i => {
        if (i > 3) {
            arrayEqualThree.push(i);
        }
    });
    for (var i = 0; i < array.length; i++) {
        if (minNumber > array[i]) {
            minResultNumber = array[i];
        };
    };
    for (var i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
        };
    };
    for(let i = minNumber; i <= maxNumber; i++) {
        result += i;
    };
   return result;
};
// lesson14
function countAvergeElem (array) {
    let sumChetElem = 0;
    let numberChetElem = 0;
    let sumNechetElem = 0;
    let numberNechetElem = 0;
    array.forEach(i => {
        if (i % 2 == 0) {
            sumChetElem += i;
            numberChetElem++;
        } else {
            sumNechetElem += i;
            numberNechetElem++;
        };  
    });
    return ([(sumChetElem / numberChetElem), (sumNechetElem / numberNechetElem)])
};
function AvergeElemDobleArr(array) {
    let chetnMass = [];
    let neChetMass = [];
    let chetsumElem = 0;
    let nechetsumElem = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j % 2 == 0) {
                chetnMass.push(j);
            } else {
                neChetMass.push(j);
            };
        });
    });
    chetnMass.forEach(i => {
        chetsumElem += i;
    })
    neChetMass.forEach(i => {
        nechetsumElem += i;
    })
    return [(chetsumElem / chetnMass.length), (nechetsumElem / neChetMass.length)];
};
// lesson17
function deleteStrZero (array) {
    for (let i = 0; i < array.length; i++ ) {
        dubleArray[i].forEach( j => {
            if (j == 0) {
                dubleArray.splice(i, 1);
                i--;
            };
        });
    };
    return dubleArray;
};
function deleteColumnZero (array) {
    for (let i = 0; i < array.length; i++ ) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == 0) {
                for (let k = 0; k < array.length; k++) {
                    for ( let m = 0; m < array[k].length; m++) {
                        if (m == j) {
                            array[k].splice(m, 1);
                        };
                    };

                };
            };
        };
    };
    return array;
};
// lesson18
function countSumRecursion (array, count) { 
    count = count || 0;           
    if (count < array.length - 1) {
     return array[count] += countSumRecursion (array, ++count);
    } else {
        return array[count];
    };
};
function countSumPositiveRecursion (array, count) { 
    count = count || 0;           
    if (count < array.length - 1) {
        if (array[count] > 0) {
            return array[count] += countSumPositiveRecursion (array, ++count);
        } else {
            return countSumPositiveRecursion (array, ++count);
        };
    } else {
        if (array[count] > 0) {
            return array[count];
        } else {
            return 0;
        };
    };
};
function countSumEqualThreeRecursion (array, count) { 
    count = count || 0;           
    if (count < array.length - 1) {
        if (array[count] % 3 == 0) {
            return array[count] += countSumEqualThreeRecursion (array, ++count);
        } else {
            return countSumEqualThreeRecursion (array, ++count);
        };
    } else {
        if (array[count] % 3 == 0) {
            return array[count];
        } else {
            return 0;
        };
    };
};
function countSumOddRecursion (array, count) { 
    count = count || 0;           
    if (count < array.length - 1) {
        if (array[count] % 2 == 0) {
            return array[count] += countSumOddRecursion (array, ++count);
        } else {
            return countSumOddRecursion (array, ++count);
        };
    } else {
        if (array[count] % 2 == 0) {
            return array[count];
        } else {
            return 0;
        };
    };
};
function countSumNumberZeroRecursion (array, count, result) {
    count = count || 0;                               
    result = result || 0;
    if (count < array.length - 1) {                   
        if (array[count] == 0) {                       
            return (result + 1) + countSumZeroRecursion (array, ++count, result); 
        } else {
            return countSumZeroRecursion (array, ++count, result);
        };
    } else {
        if (array[count] == 0) {
            return ++result;
        } else {
             return result;
        };
    };
};
// ====================


function countSumNumberZeroRecursion (array, callback, count, result) {
    count = count || 0;                               
    result = result || 0;
    if (count < array.length - 1) {                   
        if ( callback(array, count) ) {                       
            return (result + 1) + countSumNumberZeroRecursion (array, callback, ++count, result); 
        } else {
            return countSumNumberZeroRecursion (array, callback, ++count, result);
        };
    } else {
        if (callback(array, count)) {
            return ++result;
        } else {
             return result;
        };
    };
};


countSumNumberZeroRecursion ( arr, (function (i, j) { return (i[j] == 0)}) )
