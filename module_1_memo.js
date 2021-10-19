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
    return function getNumWord(offer, word, count) {
        count = count || 0;
        arrayOffer = offer.split(' ');
        if (cache[0] == offer && !!cache[word]) {
            return cache[word];
        }
        if (count < arrayOffer.length) {
            if (typeof cache[arrayOffer[count]] == 'undefined') {
                cache[arrayOffer[count]] = 1;
            } else {
                cache[arrayOffer[count]] += 1;
            }
            if (arrayOffer[count] == word) {
                return 1 + getNumWord(offer, word, ++count);
            } else {
                return 0 + getNumWord(offer, word, ++count);
            }
        } else {
            cache[0] = offer;
            return 0;
        }
    }
}
//19.5
let getCountWordMemoiz = function() {
    let cache = [];
    return function getCountWordRecurcion(offer, result, count, arrayOffer) {
        count = count || 0;
        result = result || {};
        arrayOffer = arrayOffer || ('' + offer).split(' ');
        if (cache[0] == offer) {
            return cache[1];
        }
        if (count < arrayOffer.length) {
            if (!!result[arrayOffer[count]]) {
                result[arrayOffer[count]] += 1;
            } else {
                result[arrayOffer[count]] = 1;
            }
            return getCountWordRecurcion(offer, result, ++count, arrayOffer);
        } else {
            cache[0] = offer;
            cache[1] = result;
            return result;
        }
    }
}
//19.6
let getFiboMemoiz = function() {
    let cache = [];
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
        } else {
            cache = result;
            return result;
        }
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
        } else {
            cache = result;
            return result[num];
        }
    }
}
//19.9
let countSummaElemMemoiz = function() {
    let cache = [];
    return function countSumElemRecurs(array, callback, count, result) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
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
            cache[0] = array;
            cache[1] = callback + '';
            cache[2] = result;
            return result;
        }
    }
}
//19.10
let countSumNumberMemoiz = function () {
    let cache = [];
    return function countSumNumberRecursion(array, callback, count, result) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
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
                cache[0] = array;
                cache[1] = callback + '';
                cache[2] = ++result;
                return result;
            } else {
                cache[0] = array;
                cache[1] = callback + '';
                cache[2] = result;
                return result;
            }
        }
    }
}
//19.11
let FindNumSystem10Memoiz = function () {
    let cache = [];
    return function FindNumSystem10(numSyst2, count, arrayNum, result) {
        if (cache[0] == numSyst2) {
            return cache[1];
        }
        result = result || 0;
        arrayNum = arrayNum || ('' + numSyst2).split('').reverse();
        count = count || 0;
        if (count < arrayNum.length) {
            result += arrayNum[count] * (Math.pow(2, count));
            return FindNumSystem10(numSyst2, ++count, arrayNum, result);
        } else {
            cache[0] = numSyst2;
            cache[1] = result;
            return result;
        }
    }
}
let getNumSystemTwoMemoiz = function () {
    let cache = [];
     return function getNumSystemTwo(number, result) {
         if(cache[0] == number) {
             console.log('rg')
             return cache[1];
         }
         let sum;
         result = result || '';
         if (typeof arguments[0] == 'undefined') {
             return;
         }
         if ((sum = number / 2) >= 1) {
             if (sum % 2 == parseInt(sum % 2)) {
                 result += '0';
                 return getNumSystemTwo(parseInt(sum), result);
             } else {
                 result += '1'
                 return getNumSystemTwo(parseInt(sum), result);
             }
         } else {
             result += '1';
             cache[0] = number;
             cache[1] = result.split('').reverse().join('');
             return cache[1];
         }
     }
 }
//19.12(9)
let getSumDubleArrayMemoiz = function () {
    let cache = [];
    return function getSumDubleArrayRecurcion(array, callback, i, j, result) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
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
        } else {
            cache[0] = array;
            cache[1] = callback + '';
            cache[2] = result;
            return result;
        }
    }
}
//19.12(10)
let getNumbersDubleArrayMemoiz = function () {
    let cache = [];
   return function getNumbersDubleArrayRecurcion(array, callback, i, j, result) {
    if (cache[0] == array && cache[1] == (callback + '')) {
        return cache[2];
    }
        i = i || 0;
        j = j || 0;
        result = result || {};
        if (i < array.length) {
            if (j < array[i].length) {
                if (callback(i, j)) {
                    if (!!(result[array[i][j]])) {
                        result[array[i][j]] += 1;
                    } else {
                        result[array[i][j]] = 1;
                    }
                }
                return getNumbersDubleArrayRecurcion(array, callback, i, ++j, result);
            }
            j = 0;
            return getNumbersDubleArrayRecurcion(array, callback, ++i, j, result);
        } else {
            cache[0] = array;
            cache[1] = callback + '';
            cache[2] = result;
            return result;
        }
    }
}
//19.13
let getSumMinMaxMemoiz = function () {
    let cache = [];
    return function getSumMinMaxRecurcion(array, callback, minElem, maxElem, i, j) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
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
        } else {
            if (j <= maxElem) {
                minElem = minElem + j;
                return getSumMinMaxRecurcion(array, callback, minElem, maxElem, i, ++j);
            } else {
                minElem--
                cache[0] = array;
                cache[1] = callback + '';
                cache[2] = minElem;
                return minElem;
            }
        }
    }
}
//19.14
let getAverageSumArrayMemoiz = function () {
    let cache = [];
    return function getAverageSumArray(array, callback, result, count, amountElem) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
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
        } else {
            cache[0] = array;
            cache[1] = callback + '';
            cache[2] = (result / amountElem);
            return (result / amountElem);
        }
    }
}
let getAverageSumArrayDubleMemoiz = function () {
    let cache = [];
    return function getAverageSumArrayDubleRecursion(array, callback, i, j, result, amountElem) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
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
        } else {
            cache[0] = array;
            cache[1] = callback + '';
            cache[2] = (result / amountElem);
            return (result / amountElem);
        }
    }
}
//19.15
let findTransponentMatrixMemoiz = function () {
    let cache = [];
    return function findTransponentMatrixRecursion(matrix, i, j, result) {
        if (cache[0] == matrix) {
            return cache[1];
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
        } else {
            cache[0] = matrix;
            cache[1] = result;
            return result;
        }
    }
}
//19.16
let addTwoMatrixMemoiz = function () {
    let cache = [];
    return function addTwoMatrixRecurcion(matrix, matrix2, i, j, result) {
        if (cache[0] == matrix && cache[1] == matrix2) {
            return cache[1];
        }
        result = result || [];
        i = i || 0;
        j = j || 0;
        if (i < matrix.length) {
            if (typeof result[i] == 'undefined') {
                result[i] = [];
            }
            if (j < matrix[0].length) {
                result[i][j] = matrix[i][j] + matrix2[i][j];
                return addTwoMatrixRecurcion(matrix, matrix2, i, ++j, result);
            }
            j = 0;
            return addTwoMatrixRecurcion(matrix, matrix2, ++i, j, result);
        } else {
            cache[0] = matrix;
            cache[1] = matrix2;
            cache[2] = result;
            return result;
        }
    }
}
//19.17
let deleteZeroStringMemoiz = function () {
    let cache = [];
    return function deleteZeroStringRecursion(matrix, i, j) {
        if (cache[0] == matrix && typeof cache[1] != 'undefined') {
            return cache[1];
        }
        cache[0] = matrix;
        i = i || 0;
        j = j || 0;
        if (matrix.length == 0) {
            return matrix;
        }
        if (i < matrix.length) {
            if (j < matrix[i].length) {
                if (matrix[i][j] == 0) {
                    matrix.splice(i, 1);
                    if (i != 0) {
                        --i;
                    }
                    return deleteZeroStringRecursion(matrix, i, j);
                }
                return deleteZeroStringRecursion(matrix, i, ++j);
            }
            j = 0;
            return deleteZeroStringRecursion(matrix, ++i, j);
        } else {
            cache[1] = matrix;
            return matrix;
        }
    }
}
let deleteZeroColumnMemoiz = function () {
    let cache = [];
    return function deleteZeroColumnRecursion(matrix, i, j, k, m, flag) {
        if (cache[0] == matrix && typeof cache[1] != 'undefined') {
            return cache[1];
        };
        cache[0] = matrix;
        i = i || 0;
        j = j || 0;
        k = k || 0;
        m = m || 0;
        flag = flag || false;
        if (i < matrix.length) {
            if (!!flag) {
                if (k < matrix.length) {
                    if (m == j) {
                        matrix[k].splice(m, 1);
                        return deleteZeroColumnRecursion(matrix, i, j, ++k, m, flag);
                    }
                    return deleteZeroColumnRecursion(matrix, i, j, k, ++m, flag);
                } else {
                    k = 0;
                    m = 0;
                    flag = false;
                    if (j != 0) {
                        --j;
                    } else {
                        j = 0;
                        return deleteZeroColumnRecursion(matrix, i, j, k, m, flag);
                    }
                    return deleteZeroColumnRecursion(matrix, i, ++j, k, m, flag);
                }
            }
            if (j < matrix[i].length) {
                if (matrix[i][j] == 0) {
                    flag = true;
                    k = 0;
                    m = 0;
                    return deleteZeroColumnRecursion(matrix, i, j, k, m, flag);
                }
                return deleteZeroColumnRecursion(matrix, i, ++j, k, m, flag);
            }
            j = 0;
            return deleteZeroColumnRecursion(matrix, ++i, j, k, m, flag);
        } else {
            cache[1] = matrix;
            return matrix;
        }
    }
}
