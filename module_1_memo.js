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
let findDigitsInNumberMemoiz = function() {
    let cache = {};
    return function findDigitsInNumberRecursion(number, result, count, arrayNumber) {
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
            return findDigitsInNumberRecursion(number, result, ++count, arrayNumber);
        }
        return cache[number] = result;
    }
}
//19.4
let findNumWordInOfferMemoiz = function() {
    let cache = {};
    return function findNumWord(offer, word, count, result) {
        count = count || 0;
        result = result || 0;
        arrayOffer = offer.split(' ');
        if (cache[offer + word]) {
            return cache[offer + word];
        }
        if (count < arrayOffer.length) {
            if (arrayOffer[count] == word) {
                result++;
                return findNumWord(offer, word, ++count, result);
            }
            return findNumWord(offer, word, ++count, result);
        }
        return cache[offer + word] = result;
    }
}
//19.5
let findSumWordInOfferMemoiz = function() {
    let cache = {};
    return function findCountWordRecurcion(offer, result, count, arrayOffer) {
        count = count || 0;
        result = result || {};
        arrayOffer = arrayOffer || ('' + offer).split(' ');
        if (cache[offer]) {
            return cache[offer];
        }
        if (!arguments[0]) {
            return;
        }
        if (count < arrayOffer.length) {
            if (!!result[arrayOffer[count]]) {
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
let findFiboMemoiz = function() {
    let cache = [];
    return function findFiboRecurcion(number, result, count) {
        if (cache[0] >= number) {
            return cache[1][number];
        }
        result = result || [0, 1];
        count = count || 0;
        let start = result[result.length - 2];
        let stop = result[result.length - 1];
        let sum = start + stop;
        if (count < number - 1) {
            result.push(sum);
            return findFiboRecurcion(number, result, ++count);
        }
        cache[0] = number;
        return cache[1] = result;
    }
}
//19.8
let factorialMemoiz = function() {
    let cache = [];
    return function factorialRecurs(num, count, result) {
        if (cache[0] >= num) {
            return cache[1][num];
        }
        result = result || [1, 1];
        count = count || 2;
        if (typeof result[num] == 'undefined') {
            result.push((result[result.length - 1]) * count);
            return factorialRecurs(num, ++count, result);
        }
        cache[0] = num;
        cache[1] = result;
        return cache[1][num];
    }
}
//19.9
let countSummaElemArrayMemoiz = function() {
    let cache = {};
    return function countSumElemRecurs(array, callback, count, result) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        result = result || 0;
        if (count < array.length) {
            if (callback(array, count)) {
                result += array[count];
                return countSumElemRecurs(array, callback, ++count, result);
            }
            return countSumElemRecurs(array, callback, ++count, result);
        }
        return cache[array + callback] = result;
    }
}
//19.10
let countSumNumberMemoiz = function () {
    let cache = [];
    return function countSumNumberRecursion(array, callback, count, result) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        result = result || 0;
        if (count < array.length - 1) {
            if (callback(array, count)) {
                result++;
                return countSumNumberRecursion(array, callback, ++count, result);
            } else {
                return countSumNumberRecursion(array, callback, ++count, result);
            }
        } else {
            if (callback(array, count)) {
                return cache[array + callback] = ++result;
            } else {
                return cache[array + callback] = result;
            }
        }
    }
}
//19.11
let FindNumSystemTenMemoiz = function() {
    let cache = {};
    return function FindNumSystem10(numSystTwo, count, arrayNum, result) {
        if (cache[numSystTwo]) {
            return cache[numSystTwo];
        }
        result = result || 0;
        arrayNum = arrayNum || ('' + numSystTwo).split('').reverse();
        count = count || 0;
        if (count < arrayNum.length) {
            result += arrayNum[count] * (Math.pow(2, count));
            return FindNumSystem10(numSystTwo, ++count, arrayNum, result);
        }
        return cache[numSystTwo] = result;
    }
}
let findNumSystemTwoMemoiz = function() {
    let cache = {};
    return function findNumSystemTwo(number, result, numberCopy) {
        numberCopy = numberCopy || number;
        if (cache[number]) {
            return cache[number];
        }
        let sum;
        result = result || '';
        if (typeof arguments[0] == 'undefined') {
            return;
        }
        if ((sum = numberCopy / 2) >= 1) {
            if (sum % 2 == parseInt(sum % 2)) {
                result += '0';
                return findNumSystemTwo(number, result, parseInt(sum));
            } else {
                result += '1';
                return findNumSystemTwo(number, result, parseInt(sum));
            }
        }
        result += '1';
        return cache[number] = result.split('').reverse().join('');
    }
}
//19.12(9)
let findSumDubleArrayMemoiz = function() {
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
//19.12(10)
let findNumbersDubleArrayMemoiz = function() {
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
        return cache[array + callback] = result;
    }
}
//19.13
let findSumMinMaxMemoiz = function() {
    let cache = {};
    return function findSumMinMaxRecurcion(array, callback, minElem, maxElem, index, index2) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        minElem = minElem || array[0];
        maxElem = maxElem || array[0];
        index = index || 0;
        index2 = index2 || 1;
        if (index < array.length) {
            if (array[index] < minElem && callback(index)) {
                minElem = array[i];
            }
            if (array[i] > maxElem && callback(index)) {
                maxElem = array[index];
            }
            return findSumMinMaxRecurcion(array, callback, minElem, maxElem, ++index);
        }
        if (index2 <= maxElem) {
            minElem = minElem + index2;
            return findSumMinMaxRecurcion(array, callback, minElem, maxElem, index, ++index2);
        }
        minElem--;
        return cache[array + callback] = minElem;
    }
}
//19.14
let findAverageSumArrayMemoiz = function () {
    let cache = {};
    return function findAverageSumArray(array, callback, result, count, amountElem) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        result = result || 0;
        amountElem = amountElem || 0;
        if (count < array.length) {
            if (callback(count)) {
                result += array[count];
                return findAverageSumArray(array, callback, result, ++count, ++amountElem);
            }
            return findAverageSumArray(array, callback, result, ++count, amountElem);
        } 
        return cache[array + callback] = (result / amountElem);
    }
}
let findAverageSumArrayDubleMemoiz = function () {
    let cache = {};
    return function findAverageSumArrayDubleRecursion(array, callback, index, index2, result, amountElem) {
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
                return findAverageSumArrayDubleRecursion(array, callback, index, ++index2, result, amountElem);
            }
            index2 = 0;
            return findAverageSumArrayDubleRecursion(array, callback, ++index, index2, result, amountElem);
        } 
        return cache[array + callback] = (result / amountElem);
    }
}
//19.15
let findTransponentMatrixMemoiz = function () {
    let cache = {};
    return function findTransponentMatrixRecursion(matrix, index, index2, result) {
        if (cache[matrix]) {
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
                return findTransponentMatrixRecursion(matrix, index, ++index2, result);
            }
            index2 = 0;
            return findTransponentMatrixRecursion(matrix, ++index, index2, result);
        }
        return cache[matrix] = result;
    }
}
//19.16
let addTwoMatrixMemoiz = function () {
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
let deleteZeroStringMemoiz = function () {
    let cache = {};
    return function deleteZeroStringRecursion(matrix, index, index2, copyMatrix) {
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
                if (matrix[index][index2] == 0) {
                    matrix.splice(index, 1);
                    if (index != 0) {
                        --index;
                    }
                    return deleteZeroStringRecursion(matrix, index, index2, copyMatrix);
                }
                return deleteZeroStringRecursion(matrix, index, ++index2, copyMatrix);
            }
            index2 = 0;
            return deleteZeroStringRecursion(matrix, ++index, index2, copyMatrix);
        }
        return cache[copyMatrix] = matrix;
    }
}
let deleteZeroColumnMemoiz = function () {
    let cache = {};
    return function deleteZeroColumnRecursion(matrix, index, index2, index3, index4, flag, copyMatrix) {
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
                        return deleteZeroColumnRecursion(matrix, index, index2, ++index3, index4, flag);
                    }
                    return deleteZeroColumnRecursion(matrix, index, index2, index3, ++index4, flag);
                } else {
                    index3 = 0;
                    index4 = 0;
                    flag = false;
                    if (index2 != 0) {
                        --index2;
                    } else {
                        index2 = 0;
                        return deleteZeroColumnRecursion(matrix, index, index2, index3, index4, flag);
                    }
                    return deleteZeroColumnRecursion(matrix, index, ++index2, index3, index4, flag);
                }
            }
            if (index2 < matrix[index].length) {
                if (matrix[index][index2] == 0) {
                    flag = true;
                    index3 = 0;
                    index4 = 0;
                    return deleteZeroColumnRecursion(matrix, index, index2, index3, index4, flag);
                }
                return deleteZeroColumnRecursion(matrix, index, ++index2, index3, index4, flag);
            }
            index2 = 0;
            return deleteZeroColumnRecursion(matrix, ++index, index2, index3, index4, flag);
        }
        return cache[copyMatrix] = matrix;
    }
}
