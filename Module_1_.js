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
//lesson6;
function getFibonachi(N) {
    let result = [0, 1];
    let start = result[result.length - 2];
    let stop = result[result.length - 1];
    for (let i = 1; i < N; i++) {
        result.push((start + stop));
        start = result[result.length - 2];
        stop = result[result.length - 1];
    };
    return result;
};
//lesson7;
class Rectangle {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };
    square() {
        return this.width * this.height;
    };
    perimeter() {
        return (this.width * 2) + (this.height * 2);
    };
};
class Triangle {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    };
    square() {
        return 1 / 2 * this.a * this.b * Math.sin((this.c * Math.PI) / 180);
    };
    perimeter() {
        return this.a + this.b + this.c;
    };
};
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    };
    square() {
        return Math.PI * Math.pow(this.radius, 2);
    };
    perimeter() {
        return Math.PI * 2 * this.radius;
    };
};
// lesson8
function getFactorial (number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    };
    return result;
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
// lesson11
function getNumSystem10 (numberSystemTwo) {
    let result = 0;
    let arraySystTwo = ( '' + numberSystemTwo).split('').reverse();
   for(let i = 0; i < arraySystTwo.length; i++) {
    result += arraySystTwo[i] * (Math.pow(2, i));
   };
   return result;
};
function getNumSystem2 (number) {
    let res;
    if (( res = number / 2) >= 1) {   
        if (res % 2 == parseInt(res % 2)) {  
            return (getNumSystem2(parseInt(res)) + '0');
        } else {
            return (getNumSystem2(parseInt(res)) + '1');
        };
    } else {
        return "1";
    };
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
// lesson15
function transposeMatrix (matrix) {
    let externalArray = matrix.length;
    let interiorArray = matrix[0].length;
    let result = [];
    for (var i = 0; i < interiorArray; i++) {
        result[i] = [];
        for (var j = 0; j < externalArray; j++) result[i][j] = matrix[j][i];
    }
    return result;
};
// lesson16
function addTwoMatrix(matrix1, matrix2) {
    let externalArray = matrix1.length;
    let interiorArray = matrix1[0].length;
    let result = [];
    for (var i = 0; i < externalArray; i++) {
        result[i] = [];
        for (var j = 0; j < interiorArray; j++) result[i][j] = matrix1[i][j] + matrix2[i][j];
    };
    return result;
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


//18.4
function getNumWord(offer, word, count) {
    count = count || 0;
    arrayPr = offer.split(' ');
    if (count < arrayPr.length) {
        if (arrayPr[count] == word) {
            return 1 + getNumWord(offer, word, ++count);
        } else {
            return 0 + getNumWord(offer, word, ++count);
        }
    } else {
        return 0;
    };
};
//18.11
function getNumSystem2 (number) {
    let res;
    if (( res = number / 2) >= 1) {   
        if (res % 2 == parseInt(res % 2)) {  
            return (getNumSystem2(parseInt(res)) + '0');
        } else {
            return (getNumSystem2(parseInt(res)) + '1');
        };
    } else {
        return "1";
    };
};
//18.11
function getNumSystem10Recurs (numberSystemTwo, count) {
    let arraySystTwo = ( '' + numberSystemTwo).split('').reverse();
    count = count || 0;
    if (count < arraySystTwo.length) {
        return (arraySystTwo[count] * (Math.pow(2, count))) + getNumSystem10Recurs(numberSystemTwo, ++count);
    } else {
        return 0;
    };
};
//18.8
function getRecursFactorial (number, count) {
    count = count || 1;
   if (count <= number) {
        return count * getRecursFactorial(number, ++count);
   } else {
       return 1;
   };
};
//18.1
function MonogrammaRecursion (wordOne,wordTwo, count1, count2, arrayWordOne, arrayWordTwo) {
    count1 = count1 || 0;
    count2 = count2 || 0; 
    arrayWordOne = arrayWordOne || ('' + wordOne).split('');
    arrayWordTwo = arrayWordTwo || ('' + wordTwo).split('');
    if (arrayWordOne.length != arrayWordTwo.length) {
        return false;
    };
        if (arrayWordOne.toString() == arrayWordTwo.toString()){
            return true;
        } else {
            if(arrayWordOne[count1] == arrayWordTwo[count2] || count2 > arrayWordOne.length - 1) {
                if (count1 > arrayWordOne.length - 1){
                    return false;
                };
                let deleteElem = arrayWordTwo.splice(count2, 1);
                arrayWordTwo.push(deleteElem[0]);
                count2 = 0;
                return MonogrammaRecursion(wordOne,wordTwo, ++count1, count2, arrayWordOne, arrayWordTwo);
            } else {
                if (count1 > arrayWordOne.length - 1 || count2 > arrayWordOne.length - 1){
                    return false;
                };
                return MonogrammaRecursion(wordOne,wordTwo, count1, ++count2, arrayWordOne, arrayWordTwo);
            };
        };
};
//18.3
function getDigitsInNumberRecursion(number, result, count, arrayNumber) {
    count = count || 0;
    result = result || {};
    arrayNumber = arrayNumber || ('' + number).split('');
    if (count < arrayNumber.length) {
        if (!!result[arrayNumber[count]]) {
            result[arrayNumber[count]] += 1;
        } else {
            result[arrayNumber[count]] = 1;
        };
        return getDigitsInNumberRecursion(number, result, ++count, arrayNumber);
    } else {
        return result;
    };
};
//18.4
function getCountWordRecurcion(offer, result, count, arrayOffer) {
    count = count || 0;
    result = result || {};
    arrayOffer = arrayOffer || ('' + offer).split(' ');
    if (count < arrayOffer.length) {
        if (!!result[arrayOffer[count]]) {
            result[arrayOffer[count]] += 1;
        } else {
            result[arrayOffer[count]] = 1;
        };
        return getCountWordRecurcion(offer, result, ++count, arrayOffer);
    } else {
        return result;
    };
};
//18.6
function getFiboRecurcion(number, result, count) {
    result = result || [0, 1];
    count = count || 0;
    let start = result[result.length - 2];
    let stop = result[result.length - 1];
    let sum = start + stop;
    if (count < number - 1) {
        result.push(sum);
        return getFiboRecurcion(number, result, ++count);
    } else {
        return result;
    };
};
//18.11
function FindNumSystem10 (numSyst2, count, arrayNum) {
    arrayNum = arrayNum || ('' + numSyst2).split('').reverse();
    count = count || 0;
    if (count < arrayNum.length) {
        return arrayNum[count] * (Math.pow(2, count)) + FindNumSystem10(numSyst2, ++count, arrayNum);
    } else {
        return 0;
    };
};
//18.13
function getSumMinMaxRecurcion (array, callback, minElem, maxElem, i, j) {
    minElem = minElem || array[0];
    maxElem = maxElem || array[0];
    i = i || 0;
    j = j || 1;
    if(i < array.length) {
        if (array[i] < minElem && callback(i)) {
            minElem = array[i];
        };
        if (array[i] > maxElem && callback(i)) {
            maxElem = array[i];
        };
        return getSumMinMaxRecurcion(array, callback, minElem, maxElem, ++i);
    } else {
       if (j <= maxElem){
            minElem = minElem + j;
        return getSumMinMaxRecurcion(array, callback, minElem, maxElem, i, ++j);
       } else {
           return minElem - 1;
       };
    };
};
getSumMinMaxRecurcion(mas, ((i) => {return mas[i] > 0}))



==============================================================================================================================================================
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
//lesson6;
function getFibonachi(N) {
    let result = [0, 1];
    let start = result[result.length - 2];
    let stop = result[result.length - 1];
    for (let i = 1; i < N; i++) {
        result.push((start + stop));
        start = result[result.length - 2];
        stop = result[result.length - 1];
    };
    return result;
};
//lesson7;
class Rectangle {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };
    square() {
        return this.width * this.height;
    };
    perimeter() {
        return (this.width * 2) + (this.height * 2);
    };
};
class Triangle {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    };
    square() {
        return 1 / 2 * this.a * this.b * Math.sin((this.c * Math.PI) / 180);
    };
    perimeter() {
        return this.a + this.b + this.c;
    };
};
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    };
    square() {
        return Math.PI * Math.pow(this.radius, 2);
    };
    perimeter() {
        return Math.PI * 2 * this.radius;
    };
};
// lesson8
function getFactorial (number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    };
    return result;
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
// lesson11
function getNumSystem10 (numberSystemTwo) {
    let result = 0;
    let arraySystTwo = ( '' + numberSystemTwo).split('').reverse();
   for(let i = 0; i < arraySystTwo.length; i++) {
    result += arraySystTwo[i] * (Math.pow(2, i));
   };
   return result;
};
function getNumSystem2 (number) {
    let res;
    if (( res = number / 2) >= 1) {   
        if (res % 2 == parseInt(res % 2)) {  
            return (getNumSystem2(parseInt(res)) + '0');
        } else {
            return (getNumSystem2(parseInt(res)) + '1');
        };
    } else {
        return "1";
    };
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
function getMinMaxPositiveNum (array, callback){
    let arrayEqualThree = [];
    array.forEach(i => {
        if (callback(i)) {
            arrayEqualThree.push(i);
        }
    });
    let minNumber = arrayEqualThree[0];
    let maxNumber = arrayEqualThree[0];
    let result = 0;
    for (var i = 0; i < arrayEqualThree.length; i++) {
        if (minNumber > arrayEqualThree[i]) {
            minNumber = arrayEqualThree[i];
        };
    };
    for (var i = 0; i < arrayEqualThree.length; i++) {
        if (maxNumber < arrayEqualThree[i]) {
            maxNumber = arrayEqualThree[i];
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
// lesson15
function transposeMatrix (matrix) {
    let externalArray = matrix.length;
    let interiorArray = matrix[0].length;
    let result = [];
    for (var i = 0; i < interiorArray; i++) {
        result[i] = [];
        for (var j = 0; j < externalArray; j++) result[i][j] = matrix[j][i];
    }
    return result;
};
// lesson16
function addTwoMatrix(matrix1, matrix2) {
    let externalArray = matrix1.length;
    let interiorArray = matrix1[0].length;
    let result = [];
    for (var i = 0; i < externalArray; i++) {
        result[i] = [];
        for (var j = 0; j < interiorArray; j++) result[i][j] = matrix1[i][j] + matrix2[i][j];
    };
    return result;
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

//18.10
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


//18.4
function getNumWord(offer, word, count) {
    count = count || 0;
    arrayPr = offer.split(' ');
    if (count < arrayPr.length) {
        if (arrayPr[count] == word) {
            return 1 + getNumWord(offer, word, ++count);
        } else {
            return 0 + getNumWord(offer, word, ++count);
        }
    } else {
        return 0;
    };
};
//18.11
function getNumSystem2 (number) {
    let res;
    if (( res = number / 2) >= 1) {   
        if (res % 2 == parseInt(res % 2)) {  
            return (getNumSystem2(parseInt(res)) + '0');
        } else {
            return (getNumSystem2(parseInt(res)) + '1');
        };
    } else {
        return "1";
    };
};
//18.11
function getNumSystem10Recurs (numberSystemTwo, count) {
    let arraySystTwo = ( '' + numberSystemTwo).split('').reverse();
    count = count || 0;
    if (count < arraySystTwo.length) {
        return (arraySystTwo[count] * (Math.pow(2, count))) + getNumSystem10Recurs(numberSystemTwo, ++count);
    } else {
        return 0;
    };
};
//18.8
function getRecursFactorial (number, count) {
    count = count || 1;
   if (count <= number) {
        return count * getRecursFactorial(number, ++count);
   } else {
       return 1;
   };
};
//18.1
function MonogrammaRecursion (wordOne,wordTwo, count1, count2, arrayWordOne, arrayWordTwo) {
    count1 = count1 || 0;
    count2 = count2 || 0; 
    arrayWordOne = arrayWordOne || ('' + wordOne).split('');
    arrayWordTwo = arrayWordTwo || ('' + wordTwo).split('');
    if (arrayWordOne.length != arrayWordTwo.length) {
        return false;
    };
        if (arrayWordOne.toString() == arrayWordTwo.toString()){
            return true;
        } else {
            if(arrayWordOne[count1] == arrayWordTwo[count2] || count2 > arrayWordOne.length - 1) {
                if (count1 > arrayWordOne.length - 1){
                    return false;
                };
                let deleteElem = arrayWordTwo.splice(count2, 1);
                arrayWordTwo.push(deleteElem[0]);
                count2 = 0;
                return MonogrammaRecursion(wordOne,wordTwo, ++count1, count2, arrayWordOne, arrayWordTwo);
            } else {
                if (count1 > arrayWordOne.length - 1 || count2 > arrayWordOne.length - 1){
                    return false;
                };
                return MonogrammaRecursion(wordOne,wordTwo, count1, ++count2, arrayWordOne, arrayWordTwo);
            };
        };
};
//18.3
function getDigitsInNumberRecursion(number, result, count, arrayNumber) {
    count = count || 0;
    result = result || {};
    arrayNumber = arrayNumber || ('' + number).split('');
    if (count < arrayNumber.length) {
        if (!!result[arrayNumber[count]]) {
            result[arrayNumber[count]] += 1;
        } else {
            result[arrayNumber[count]] = 1;
        };
        return getDigitsInNumberRecursion(number, result, ++count, arrayNumber);
    } else {
        return result;
    };
};
//18.4
function getCountWordRecurcion(offer, result, count, arrayOffer) {
    count = count || 0;
    result = result || {};
    arrayOffer = arrayOffer || ('' + offer).split(' ');
    if (count < arrayOffer.length) {
        if (!!result[arrayOffer[count]]) {
            result[arrayOffer[count]] += 1;
        } else {
            result[arrayOffer[count]] = 1;
        };
        return getCountWordRecurcion(offer, result, ++count, arrayOffer);
    } else {
        return result;
    };
};
//18.6
function getFiboRecurcion(number, result, count) {
    result = result || [0, 1];
    count = count || 0;
    let start = result[result.length - 2];
    let stop = result[result.length - 1];
    let sum = start + stop;
    if (count < number - 1) {
        result.push(sum);
        return getFiboRecurcion(number, result, ++count);
    } else {
        return result;
    };
};
//18.9
function countSummaElemRecursion (array, callback, count, result) {
    count = count || 0;                               
    result = result || 0;
    if (count < array.length) {  
       if ( callback(array, count) ) {                       
            return array[count] + countSummaElemRecursion (array, callback, ++count, result); 
        } else {
            return countSummaElemRecursion (array, callback, ++count, result);
        };
   } else {
        return 0;
    };
};
countSummaElemRecursion(arr, (function (i, j) { return (i[j]) > 0}))
//18.11
function FindNumSystem10 (numSyst2, count, arrayNum) {
    arrayNum = arrayNum || ('' + numSyst2).split('').reverse();
    count = count || 0;
    if (count < arrayNum.length) {
        return arrayNum[count] * (Math.pow(2, count)) + FindNumSystem10(numSyst2, ++count, arrayNum);
    } else {
        return 0;
    };
};
function getNumSystem2 (number) {
    let res;
    if (( res = number / 2) >= 1) {   
        if (res % 2 == parseInt(res % 2)) {  
            return (getNumSystem2(parseInt(res)) + '0');
        } else {
            return (getNumSystem2(parseInt(res)) + '1');
        };
    } else {
        return "1";
    };
};
//18.9-12
function getSumDubleArrayRecurcion (array, callback, i, j, result) {
    i = i || 0;
    j = j || 0;
    result = result || 0;
    if(i < array.length) {
        if (j < array[i].length) {
            if(callback(i, j) ) {
                result += array[i][j];
            }
            
            return getSumDubleArrayRecurcion(array, callback, i, ++j, result);
        };
        j = 0;
       return  getSumDubleArrayRecurcion(array, callback, ++i, j, result);
    } else {
        return result;
    };
};
getSumDubleArrayRecurcion(mas, (function (i, j) { return mas[i][j] > 0}))
//18.10-12
function getNumbersDubleArrayRecurcion (array, callback, i, j, result) {
    i = i || 0;
    j = j || 0;
    result = result || {};
    if(i < array.length) {
        if (j < array[i].length) {
            if(callback(i, j) ) {
                if( !!(result[array[i][j]]) ) {
                    result[array[i][j]] += 1;
                } else {
                    result[array[i][j]] = 1;
                };
            };
            return getNumbersDubleArrayRecurcion(array, callback, i, ++j, result);
        };
        j = 0;
       return  getNumbersDubleArrayRecurcion(array, callback, ++i, j, result);
    } else {
        return result;
    };
};
getNumbersDubleArrayRecurcion(mas, (function (i, j) { return mas[i][j] > 0}))
//18.13
function getSumMinMaxRecurcion (array, callback, minElem, maxElem, i, j) {
    minElem = minElem || array[0];
    maxElem = maxElem || array[0];
    i = i || 0;
    j = j || 1;
    if(i < array.length) {
        if (array[i] < minElem && callback(i)) {
            minElem = array[i];
        };
        if (array[i] > maxElem && callback(i)) {
            maxElem = array[i];
        };
        return getSumMinMaxRecurcion(array, callback, minElem, maxElem, ++i);
    } else {
       if (j <= maxElem){
            minElem = minElem + j;
        return getSumMinMaxRecurcion(array, callback, minElem, maxElem, i, ++j);
       } else {
           return minElem - 1;
       };
    };
};
getSumMinMaxRecurcion(mas, ((i) => {return mas[i] > 0}))






















==============================
    
//18.14-1
    function getAverageSumArray(array, callback, result, count, amountElem) {
    count = count || 0;
    result = result || 0;
    amountElem = amountElem || 0;
    if (count < array.length) {
        if (callback(count)) {
            result += array[count];
            return getAverageSumArray(array, callback, result, ++count, ++amountElem);
        };
        return getAverageSumArray(array, callback, result, ++count, amountElem);
    } else {
        return (result / amountElem);
    };
};
getAverageSumArray(mas, ((i) => { return (mas[i] % 2) == 0 }))
//18.14-2
function getAverageSumArrayDubleRecursion(array, callback, i, j, result, amountElem) {
    i = i || 0;
    j = j || 0;
    result = result || 0;
    amountElem = amountElem || 0;
    if (i < array.length) {
        if (j < array[i].length) {
            if (callback(i, j)) {
                result += array[i][j];
                amountElem++;
            };
            return getAverageSumArrayDubleRecursion(array, callback, i, ++j, result, amountElem);
        };
        j = 0;
        return getAverageSumArrayDubleRecursion(array, callback, ++i, j, result, amountElem);
    } else {
        return (result / amountElem);
    };
};
getAverageSumArrayDubleRecursion(mas, (function(i, j) { return (mas[i][j] % 2 == 0) }))
