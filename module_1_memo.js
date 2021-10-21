//19.1
let monogrammaMemoiz = function() {
    let cache = {};
    return function monogrammaRecursion(wordOne, wordTwo, count1, count2, arrayWordOne, arrayWordTwo) {
        if (typeof cache[wordOne + wordTwo] != 'undefined') {
            return cache[wordOne + wordTwo];
        }
        count1 = count1 || 0;
        count2 = count2 || 0;
        arrayWordOne = arrayWordOne || ('' + wordOne).split('');
        arrayWordTwo = arrayWordTwo || ('' + wordTwo).split('');
        if (arrayWordOne.length != arrayWordTwo.length) {
            return cache[wordOne + wordTwo] = false;
        }
        if (arrayWordOne.toString() == arrayWordTwo.toString()) {
            return cache[wordOne + wordTwo] = true;
        } else {
            if (arrayWordOne[count1] == arrayWordTwo[count2] || count2 > arrayWordOne.length - 1) {
                if (count1 > arrayWordOne.length - 1) {
                    return false;
                }
                let deleteElem = arrayWordTwo.splice(count2, 1);
                arrayWordTwo.push(deleteElem[0]);
                count2 = 0;
                return monogrammaRecursion(wordOne, wordTwo, ++count1, count2, arrayWordOne, arrayWordTwo);
            } else {
                if (count1 > arrayWordOne.length - 1 || count2 > arrayWordOne.length - 1) {
                    return false;
                }
                return monogrammaRecursion(wordOne, wordTwo, count1, ++count2, arrayWordOne, arrayWordTwo);
            }
        }
    }
}
//19.3
let calculateDigitsNumber = function() {
    let cache = {};
    return function calculateDigitsNumberRecursion(number, result, count, arrayNumber) {
        if(typeof arguments[0] == 'undefined') {
            return null;
        }
        if (cache[number]) {
            return cache[number];
        }
        count = count || 0;
        result = result || {};
        arrayNumber = arrayNumber || ('' + number).split('');
        if (count < arrayNumber.length) {
            if (result[arrayNumber[count]]) {
                result[arrayNumber[count]]++;
            } else {
                result[arrayNumber[count]] = 1;
            }
            return calculateDigitsNumberRecursion(number, result, ++count, arrayNumber);
        }
        return cache[number] = result;
    }
}
//19.4
let findSumUniqueWord = function() {
    let cache = {};
    return function findSumUniqueWordRecursion(offer, word, count, result) {
        count = count || 0;
        result = result || 0;
        arrayOffer = offer.split(' ');
        if(!arguments[1]) {
            return null;
        }
        if (cache[offer + word]) {
            return cache[offer + word];
        }
        if (count < arrayOffer.length) {
            if (arrayOffer[count] == word) {
                result++;
                return findSumUniqueWordRecursion(offer, word, ++count, result);
            }
            return findSumUniqueWordRecursion(offer, word, ++count, result);
        }
        return cache[offer + word] = result;
    }
}
//19.5
let findSumWord = function() {
    let cache = {};
    return function findCountWordRecurcion(offer, result, count, arrayOffer) {
        count = count || 0;
        result = result || {};
        arrayOffer = arrayOffer || ('' + offer).split(' ');
        if (cache[offer]) {
            return cache[offer];
        }
        if (!arguments[0]) {
            return null;
        }
        if (count < arrayOffer.length) {
            if (result[arrayOffer[count]]) {
                result[arrayOffer[count]]++;
            } else {
                result[arrayOffer[count]] = 1;
            }
            return findCountWordRecurcion(offer, result, ++count, arrayOffer);
        }
        return cache[offer] = result;
    }
}
//19.6
let calculateFibonachi = function() {
    let cache = [];
    return function calculateFibonachiRecurcion(number, result, count) {
        if (cache[0] >= number) {
            return cache[1][number];
        }
        if(typeof arguments[0] == 'undefined'){
            return null;
        }
        result = result || [0, 1];
        count = count || 0;
        let start = result[result.length - 2];
        let stop = result[result.length - 1];
        let sum = start + stop;
        if (count < number - 1) {
            result.push(sum);
            return calculateFibonachiRecurcion(number, result, ++count);
        }
        cache[0] = number;
        return cache[1] = result;
    }
}
//19.8
let calculateFactorial = function() {
    let cache = [];
    return function calculateFactorialRecursion(num, count, result) {
        if(typeof arguments[0] == 'undefined') {
            return null;
        }
        if (cache[0] >= num) {
            return cache[1][num];
        }
        result = result || [1, 1];
        count = count || 2;
        if (typeof result[num] == 'undefined') {
            result.push((result[result.length - 1]) * count);
            return calculateFactorialRecursion(num, ++count, result);
        }
        cache[0] = num;
        cache[1] = result;
        return cache[1][num];
    }
}
//19.9
let calculateSumElements = function() {
    let cache = {};
    return function calculateSumElementsRecursion(array, callback, count, result) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        result = result || 0;
        if (count < array.length) {
            if (callback(array, count)) {
                result += array[count];
                return calculateSumElementsRecursion(array, callback, ++count, result);
            }
            return calculateSumElementsRecursion(array, callback, ++count, result);
        }
        return cache[array + callback] = result;
    }
}
//19.10
let calculateAmountElements = function () {
    let cache = {};
    return function calculateAmountElementsRecursion(array, callback, count, result) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        result = result || 0;
        if (count < array.length - 1) {
            if (callback(array, count)) {
                result++;
                return calculateAmountElementsRecursion(array, callback, ++count, result);
            }
            return calculateAmountElementsRecursion(array, callback, ++count, result);
        } else {
            if (callback(array, count)) {
                return cache[array + callback] = ++result;
            }
            return cache[array + callback] = result;
        }
    }
}
//19.11
let FindNumSystemTen = function() {
    let cache = {};
    return function FindNumSystemTenRecursion(numSystemTwo, count, arrayNum, result) {
        if (cache[numSystemTwo]) {
            return cache[numSystemTwo];
        }
        if(typeof arguments[0] == 'undefined'){
            return null;
        }
        result = result || 0;
        arrayNum = arrayNum || ('' + numSystemTwo).split('').reverse();
        count = count || 0;
        if (count < arrayNum.length) {
            result += arrayNum[count] * (Math.pow(2, count));
            return FindNumSystemTenRecursion(numSystemTwo, ++count, arrayNum, result);
        }
        return cache[numSystemTwo] = result;
    }
}
let findNumSystemTwo = function() {
    let cache = {};
    return function findNumSystemTwoRecursion(number, result, numberCopy) {
        numberCopy = numberCopy || number;
        if (cache[number]) {
            return cache[number];
        }
        let sum;
        result = result || '';
        if (typeof arguments[0] == 'undefined') {
            return null;
        }
        if ((sum = numberCopy / 2) >= 1) {
            if (sum % 2 == parseInt(sum % 2)) {
                result += '0';
                return findNumSystemTwoRecursion(number, result, parseInt(sum));
            } else {
                result += '1';
                return findNumSystemTwoRecursion(number, result, parseInt(sum));
            }
        }
        result += '1';
        return cache[number] = result.split('').reverse().join('');
    }
}
//19.12(9)
let calculateSumElementsDubleArray = function() {
    let cache = {};
    return function findSumDubleArrayRecurcion(array, callback, index, index2, result) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        index = index || 0;
        index2 = index2 || 0;
        result = result || 0;
        if (index < array.length) {
            if (index2 < array[index].length) {
                if (callback(index, index2)) {
                    result += array[index][index2];
                }
                return findSumDubleArrayRecurcion(array, callback, index, ++index2, result);
            }
            index2 = 0;
            return findSumDubleArrayRecurcion(array, callback, ++index, index2, result);
        }
        return cache[array + callback] = result;
    }
}
calculateSumElementsDubleArray()(arr, ((i) => { return i > 0 }));
//19.12(10)
let calculateAmountElementsDubleArray = function() {
    let cache = {};
    return function findNumbersDubleArrayRecurcion(array, callback, count, countTwo, result) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        countTwo = countTwo || 0;
        result = result || {};
        if (count < array.length) {
            if (countTwo < array[count].length) {
                if (callback(count, countTwo)) {
                    if (result[array[count][countTwo]]) {
                        result[array[count][countTwo]]++;
                    } else {
                        result[array[count][countTwo]] = 1;
                    }
                }
                return findNumbersDubleArrayRecurcion(array, callback, count, ++countTwo, result);
            }
            countTwo = 0;
            return findNumbersDubleArrayRecurcion(array, callback, ++count, countTwo, result);
        }
        return cache[array + callback] = result;;
    }
}
calculateAmountElementsDubleArray()(arr2, (function(countOne, countTwo) { return arr2[countOne][countTwo] > 0 }))
//19.13
let sumMinToMax = function() {
    let cache = {};
    return function sumMinToMaxRecurcion(array, callback, minElem, maxElem, index, index2) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        minElem = minElem || array[0];
        maxElem = maxElem || array[0];
        index = index || 0;
        index2 = index2 || 1;
        if (index < array.length) {
            if (array[index] < minElem && callback(index)) {
                minElem = array[index];
            }
            if (array[index] > maxElem && callback(index)) {
                maxElem = array[index];
            }
            return sumMinToMaxRecurcion(array, callback, minElem, maxElem, ++index);
        }
        if (index2 <= maxElem) {
            minElem = minElem + index2;
            return sumMinToMaxRecurcion(array, callback, minElem, maxElem, index, ++index2);
        }
        minElem--;
        return cache[array + callback] = minElem;
    }
}
sumMinToMax()(arr, ((i) => { return arr[i] > 0 }))
//19.14
let AvergeNumber = function () {
    let cache = {};
    return function AvergeNumberRecurion(array, callback, result, count, amountElem) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        result = result || 0;
        amountElem = amountElem || 0;
        if (count < array.length) {
            if (callback(count)) {
                result += array[count];
                return AvergeNumberRecurion(array, callback, result, ++count, ++amountElem);
            }
            return AvergeNumberRecurion(array, callback, result, ++count, amountElem);
        } 
        return cache[array + callback] = (result / amountElem);
    }
}
AvergeNumber()(arr, ((i) => { return (arr[i] % 2) == 0 }));
let AvergeNumberDobleArray = function () {
    let cache = {};
    return function AvergeNumberDobleArrayRecursion(array, callback, index, index2, result, amountElem) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        index = index || 0;
        index2 = index2 || 0;
        result = result || 0;
        amountElem = amountElem || 0;
        if (index < array.length) {
            if (index2 < array[index].length) {
                if (callback(index, index2)) {
                    result += array[index][index2];
                    amountElem++;
                }
                return AvergeNumberDobleArrayRecursion(array, callback, index, ++index2, result, amountElem);
            }
            index2 = 0;
            return AvergeNumberDobleArrayRecursion(array, callback, ++index, index2, result, amountElem);
        } 
        return cache[array + callback] = result / amountElem;
    }
}
AvergeNumberDobleArray()(arr2, (function(countOne, countTwo) { return (arr2[countOne][countTwo] % 2 == 0) }));
//19.15
let transponentMatrix = function () {
    let cache = {};
    return function transponentMatrixRecursion(matrix, index, index2, result) {
        if (cache[matrix]) {
            console.log(cache)
            return cache[matrix];
        };
        result = result || [];
        index = index || 0;
        index2 = index2 || 0;
        if (index < matrix[0].length) {
            if (typeof result[index] == 'undefined') {
                result[index] = [];
            }
            if (index2 < matrix.length) {
                result[index][index2] = matrix[index2][index];
                return transponentMatrixRecursion(matrix, index, ++index2, result);
            }
            index2 = 0;
            return transponentMatrixRecursion(matrix, ++index, index2, result);
        }
        return cache[matrix] = result;
    }
}
//19.16
let addTwoMatrix = function () {
    let cache = {};
    return function addTwoMatrixRecurcion(matrix, matrix2, index, index2, result) {
        if (cache[matrix + matrix2]) {
            return cache[matrix + matrix2];
        }
        result = result || [];
        index = index || 0;
        index2 = index2 || 0;
        if (index < matrix.length) {
            if (typeof result[index] == 'undefined') {
                result[index] = [];
            }
            if (index2 < matrix[0].length) {
                result[index][index2] = matrix[index][index2] + matrix2[index][index2];
                return addTwoMatrixRecurcion(matrix, matrix2, index, ++index2, result);
            }
            index2 = 0;
            return addTwoMatrixRecurcion(matrix, matrix2, ++index, index2, result);
        } 
        return cache[matrix + matrix2] = result;
    }
}
//19.17
let deleteValueString = function () {
    let cache = {};
    return function deleteValueStringRecursion(matrix, value, index, index2, copyMatrix) {
        copyMatrix = copyMatrix || matrix;
        if (cache[copyMatrix]) {
            return cache[matrix];
        }
        cache[0] = matrix;
        index = index || 0;
        index2 = index2 || 0;
        if (matrix.length == 0) {
            return matrix;
        }
        if (index < matrix.length) {
            if (index2 < matrix[index].length) {
                if (matrix[index][index2] == value) {
                    matrix.splice(index, 1);
                    if (index != 0) {
                        --index;
                    }
                    return deleteValueStringRecursion(matrix, value, index, index2, copyMatrix);
                }
                return deleteValueStringRecursion(matrix, value, index, ++index2, copyMatrix);
            }
            index2 = 0;
            return deleteValueStringRecursion(matrix, value, ++index, index2, copyMatrix);
        }
        return cache[copyMatrix] = matrix;
    }
}
let deleteValueColumn = function () {
    let cache = {};
    return function deleteColumnValueRecursion(matrix, value, index, index2, index3, index4, flag, copyMatrix) {
        copyMatrix = copyMatrix || matrix;
        if (cache[copyMatrix]) {
            return cache[copyMatrix];
        };
        cache[0] = matrix;
        index = index || 0;
        index2 = index2 || 0;
        index3 = index3 || 0;
        index4 = index4 || 0;
        flag = flag || false;
        if (index < matrix.length) {
            if (flag) {
                if (index3 < matrix.length) {
                    if (index4 == index2) {
                        matrix[index3].splice(index4, 1);
                        return deleteColumnValueRecursion(matrix, value, index, index2, ++index3, index4, flag);
                    }
                    return deleteColumnValueRecursion(matrix, value, index, index2, index3, ++index4, flag);
                } else {
                    index3 = 0;
                    index4 = 0;
                    flag = false;
                    if (index2 != 0) {
                        --index2;
                    } else {
                        index2 = 0;
                        return deleteColumnValueRecursion(matrix, value, index, index2, index3, index4, flag);
                    }
                    return deleteColumnValueRecursion(matrix, value, index, ++index2, index3, index4, flag);
                }
            }
            if (index2 < matrix[index].length) {
                if (matrix[index][index2] == value) {
                    flag = true;
                    index3 = 0;
                    index4 = 0;
                    return deleteColumnValueRecursion(matrix, value, index, index2, index3, index4, flag);
                }
                return deleteColumnValueRecursion(matrix, value, index, ++index2, index3, index4, flag);
            }
            index2 = 0;
            return deleteColumnValueRecursion(matrix, value, ++index, index2, index3, index4, flag);
        }
        return cache[copyMatrix] = matrix;
    }
}
