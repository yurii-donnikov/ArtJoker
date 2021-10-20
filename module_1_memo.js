//19.1
let memoMonogramma = function() {
    let cache = {};
    return function MonogrammaRecursion(wordOne, wordTwo, count1, count2, arrayWordOne, arrayWordTwo) {
        if (typeof cache[wordOne+wordTwo] !== 'undefined') {
            return cache[wordOne+wordTwo];
        }
        count1 = count1 || 0;
        count2 = count2 || 0;
        arrayWordOne = arrayWordOne || ('' + wordOne).split('');
        arrayWordTwo = arrayWordTwo || ('' + wordTwo).split('');
        if (arrayWordOne.length != arrayWordTwo.length) {
            return cache[wordOne+wordTwo] = false;
        }
        if (arrayWordOne.toString() == arrayWordTwo.toString()) {
            return cache[wordOne+wordTwo] = true;
        } else {
            if (arrayWordOne[count1] == arrayWordTwo[count2] || count2 > arrayWordOne.length - 1) {
                if (count1 > arrayWordOne.length - 1) {
                    return false;
                }
                let deleteElem = arrayWordTwo.splice(count2, 1);
                arrayWordTwo.push(deleteElem[0]);
                count2 = 0;
                return MonogrammaRecursion(wordOne, wordTwo, ++count1, count2, arrayWordOne, arrayWordTwo);
            } else {
                if (count1 > arrayWordOne.length - 1 || count2 > arrayWordOne.length - 1) {
                    return false;
                }
                return MonogrammaRecursion(wordOne, wordTwo, count1, ++count2, arrayWordOne, arrayWordTwo);
            }
        }
    }
}
//19.3
let getDigitsInNumberMemoiz = function() {
    let cache = {};
    return function getDigitsInNumberRecursion(number, result, count, arrayNumber) {
        if (typeof cache[number] !== 'undefined') {
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
            return getDigitsInNumberRecursion(number, result, ++count, arrayNumber);
        } return cache[number] = result;
    }
}
//19.4
let getNumWordMemoiz = function() {
    let cache = {};
    return function getNumWord(offer, word, count, result) {
        count = count || 0;
        result = result || 0;
        arrayOffer = offer.split(' ');
        if (typeof cache[offer] !== 'undefined') {
            return cache[offer];
        }
        if (count < arrayOffer.length) {
            if (arrayOffer[count] == word) {
                result++;
                return getNumWord(offer, word, ++count, result);
            } else {
                return getNumWord(offer, word, ++count, result);
            }
        } else {
            return cache[offer] = result;
        }
    }
}
//19.5
let getCountWordMemoiz = function() {
    let cache = {};
    return function getCountWordRecurcion(offer, result, count, arrayOffer) {
        count = count || 0;
        result = result || {};
        arrayOffer = arrayOffer || ('' + offer).split(' ');
        if (typeof cache[offer] != 'undefined') {
            return cache[offer];
        }
        if (count < arrayOffer.length) {
            if (!!result[arrayOffer[count]]) {
                result[arrayOffer[count]]++;
            } else {
                result[arrayOffer[count]] = 1;
            }
            return getCountWordRecurcion(offer, result, ++count, arrayOffer);
        } return cache[offer] = result;
    }
}
//19.6
let getFiboMemoiz = function() {
    let cache = {};
    return function getFiboRecurcion(number, result, count) {
        if (typeof cache[number] != 'undefined') {
            return cache[number];
        }
        result = result || [0, 1];
        count = count || 0;
        let start = result[result.length - 2];
        let stop = result[result.length - 1];
        let sum = start + stop;
        if (count < number - 1) {
            result.push(sum);
            return getFiboRecurcion(number, result, ++count);
        } return cache[number] = result;
    }
}
//19.8
let factorialMemoiz = function() {
    let cache = [];
    return function factRecursiya(num, count, result) {
        if (cache[num]) {
            return cache[num];
        }
        result = result || [1, 1];
        count = count || 2;
        if (typeof result[num] == 'undefined') {
            result.push((result[result.length - 1]) * count);
            return factRecursiya(num, ++count, result);
        } return result[num];
    }
}
//19.9
let countSummaElemMemoiz = function() {
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
            } else {
                return countSumElemRecurs(array, callback, ++count, result);
            }
        } else {
            return cache[array + callback] = result;
        }
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
                result += 1;
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
let getNumSystemTwoMemoiz = function() {
    let cache = {};
    return function getNumSystemTwo(number, result, numberCopy) {
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
                return getNumSystemTwo(number, result, parseInt(sum));
            } else {
                result += '1';
                return getNumSystemTwo(number, result, parseInt(sum));
            }
        }
        result += '1';
        return cache[number] = result.split('').reverse().join('');
    }
}
//19.12(9)
let getSumDubleArrayMemoiz = function() {
    let cache = {};
    return function getSumDubleArrayRecurcion(array, callback, i, j, result) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        i = i || 0;
        j = j || 0;
        result = result || 0;
        if (i < array.length) {
            if (j < array[i].length) {
                if (callback(i, j)) {
                    result += array[i][j];
                }
                return getSumDubleArrayRecurcion(array, callback, i, ++j, result);
            }
            j = 0;
            return getSumDubleArrayRecurcion(array, callback, ++i, j, result);
        }
        return cache[array + callback] = result;
    }
}
//19.12(10)
let getNumbersDubleArrayMemoiz = function() {
    let cache = {};
    return function getNumbersDubleArrayRecurcion(array, callback, count, countTwo, result) {
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
                return getNumbersDubleArrayRecurcion(array, callback, count, ++countTwo, result);
            }
            countTwo = 0;
            return getNumbersDubleArrayRecurcion(array, callback, ++count, countTwo, result);
        }
        return cache[array + callback] = result;
    }
}
//19.13
let getSumMinMaxMemoiz = function() {
    let cache = {};
    return function getSumMinMaxRecurcion(array, callback, minElem, maxElem, i, j) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        minElem = minElem || array[0];
        maxElem = maxElem || array[0];
        i = i || 0;
        j = j || 1;
        if (i < array.length) {
            if (array[i] < minElem && callback(i)) {
                minElem = array[i];
            }
            if (array[i] > maxElem && callback(i)) {
                maxElem = array[i];
            }
            return getSumMinMaxRecurcion(array, callback, minElem, maxElem, ++i);
        }
        if (j <= maxElem) {
            minElem = minElem + j;
            return getSumMinMaxRecurcion(array, callback, minElem, maxElem, i, ++j);
        }
        minElem--;
        return cache[array + callback] = minElem;
    }
}
//19.14
let getAverageSumArrayMemoiz = function () {
    let cache = {};
    return function getAverageSumArray(array, callback, result, count, amountElem) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        count = count || 0;
        result = result || 0;
        amountElem = amountElem || 0;
        if (count < array.length) {
            if (callback(count)) {
                result += array[count];
                return getAverageSumArray(array, callback, result, ++count, ++amountElem);
            }
            return getAverageSumArray(array, callback, result, ++count, amountElem);
        } 
        return cache[array + callback] = (result / amountElem);
    }
}
let getAverageSumArrayDubleMemoiz = function () {
    let cache = {};
    return function getAverageSumArrayDubleRecursion(array, callback, i, j, result, amountElem) {
        if (cache[array + callback]) {
            return cache[array + callback];
        }
        i = i || 0;
        j = j || 0;
        result = result || 0;
        amountElem = amountElem || 0;
        if (i < array.length) {
            if (j < array[i].length) {
                if (callback(i, j)) {
                    result += array[i][j];
                    amountElem++;
                }
                return getAverageSumArrayDubleRecursion(array, callback, i, ++j, result, amountElem);
            }
            j = 0;
            return getAverageSumArrayDubleRecursion(array, callback, ++i, j, result, amountElem);
        } 
        return cache[array + callback] = (result / amountElem);
    }
}
//19.15
let findTransponentMatrixMemoiz = function () {
    let cache = {};
    return function findTransponentMatrixRecursion(matrix, i, j, result) {
        if (cache[matrix]) {
            return cache[matrix];
        };
        result = result || [];
        i = i || 0;
        j = j || 0;
        if (i < matrix[0].length) {
            if (typeof result[i] == 'undefined') {
                result[i] = [];
            }
            if (j < matrix.length) {
                result[i][j] = matrix[j][i];
                return findTransponentMatrixRecursion(matrix, i, ++j, result);
            }
            j = 0;
            return findTransponentMatrixRecursion(matrix, ++i, j, result);
        }
        return cache[matrix] = result;
    }
}
//19.16
let addTwoMatrixMemoiz = function () {
    let cache = {};
    return function addTwoMatrixRecurcion(matrix, matrix2, index, index2, result) {
        if (cache[matrix + matrix2]) {
            console.log(cache)
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
            console.log('rg')
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
