//les18.1
function MonogrammaRecursion(wordOne, wordTwo, count1, count2, arrayWordOne, arrayWordTwo) {
    count1 = count1 || 0;
    count2 = count2 || 0;
    arrayWordOne = arrayWordOne || ('' + wordOne).split('');
    arrayWordTwo = arrayWordTwo || ('' + wordTwo).split('');
    if (arrayWordOne.length != arrayWordTwo.length) {
        return false;
    }
    if (arrayWordOne.toString() == arrayWordTwo.toString()) {
        return true;
    } else {
        if (arrayWordOne[count1] == arrayWordTwo[count2]) {
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
        }
        return getDigitsInNumberRecursion(number, result, ++count, arrayNumber);
    } else {
        return result;
    }
}
//18.4
function getNumWord(offer, word, count) {
    count = count || 0;
    arrayOffer = offer.split(' ');
    if (count < arrayOffer.length) {
        if (arrayOffer[count] == word) {
            return 1 + getNumWord(offer, word, ++count);
        } else {
            return 0 + getNumWord(offer, word, ++count);
        }
    } else {
        return 0;
    }
}
//18.5
function getCountWordRecurcion(offer, result, count, arrayOffer) {
    count = count || 0;
    result = result || {};
    arrayOffer = arrayOffer || ('' + offer).split(' ');
    if (count < arrayOffer.length) {
        if (!!result[arrayOffer[count]]) {
            result[arrayOffer[count]]++;
        } else {
            result[arrayOffer[count]] = 1;
        }
        return getCountWordRecurcion(offer, result, ++count, arrayOffer);
    } else {
        return result;
    }
}
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
    }
}
//18.8
function getRecursFactorial(number, count) {
    count = count || 1;
    if (typeof arguments[0] == 'undefined') {
        return 0;
    }
    if (count <= number) {
        return count * getRecursFactorial(number, ++count);
    } else {
        return 1;
    }
}
//18.9
function countSummaElemRecursion(array, callback, count, result) {
    count = count || 0;
    result = result || 0;
    if (count < array.length) {
        if (callback(array, count)) {
            return array[count] + countSummaElemRecursion(array, callback, ++count, result);
        } else {
            return countSummaElemRecursion(array, callback, ++count, result);
        }
    } else {
        return 0;
    }
}
countSummaElemRecursion(arr, (function (i, j) { return (i[j]) > 0}));
//18.10
function countSumNumberZeroRecursion(array, callback, count, result) {
    count = count || 0;
    result = result || 0;
    if (count < array.length - 1) {
        if (callback(array, count)) {
            return (result + 1) + countSumNumberZeroRecursion(array, callback, ++count, result);
        } else {
            return countSumNumberZeroRecursion(array, callback, ++count, result);
        };
    } else {
        if (callback(array, count)) {
            return ++result;
        } else {
            return result;
        }
    }
}
countSumNumberZeroRecursion(arr, (function(i, j) { return (i[j] == 0) }));
//18.11
function FindNumSystem10(numSyst2, count, arrayNum) {
    arrayNum = arrayNum || ('' + numSyst2).split('').reverse();
    count = count || 0;
    if (count < arrayNum.length) {
        return arrayNum[count] * (Math.pow(2, count)) + FindNumSystem10(numSyst2, ++count, arrayNum);
    } else {
        return 0;
    }
}
function getNumSystem2(number) {
    let res;
    if (typeof arguments[0] == 'undefined') {
        return;
    }
    if ((res = number / 2) >= 1) {
        if (res % 2 == parseInt(res % 2)) {
            return (getNumSystem2(parseInt(res)) + '0');
        } else {
            return (getNumSystem2(parseInt(res)) + '1');
        }
    } else {
        return "1";
    }
}
//18.12(9)
function getSumDubleArrayRecurcion(array, callback, i, j, result) {
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
        return result;
    }
}
getSumDubleArrayRecurcion(arr, (function(i, j) { return arr[i][j] > 0 }))
//18.12(10)
function getNumbersDubleArrayRecurcion(array, callback, i, j, result) {
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
        return result;
    }
}
getNumbersDubleArrayRecurcion(mas, (function(i, j) { return mas[i][j] > 0 }))
//18.13
function getSumMinMaxRecurcion(array, callback, minElem, maxElem, i, j) {
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
            return minElem - 1;
        }
    }
}
getSumMinMaxRecurcion(mas, ((i) => { return mas[i] > 0 }))
//18.14
function getAverageSumArray(array, callback, result, count, amountElem) {
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
        return (result / amountElem);
    }
}
getAverageSumArray(mas, ((i) => { return (mas[i] % 2) == 0 }))
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
            }
            return getAverageSumArrayDubleRecursion(array, callback, i, ++j, result, amountElem);
        }
        j = 0;
        return getAverageSumArrayDubleRecursion(array, callback, ++i, j, result, amountElem);
    } else {
        return (result / amountElem);
    }
}
getAverageSumArrayDubleRecursion(mas, (function(i, j) { return (mas[i][j] % 2 == 0) }))
//18.15
function findTransponentMatrixRecursion(matrix, i, j, result) {
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
        return result;
    }
}
//18.16
function addTwoMatrixRecurcion(matrix, matrix2, i, j, result) {
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
        return result;
    }
}
//18.17
function deleteZeroStringRecursion(matrix, i, j) {
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
        return matrix;
    }
}
function deleteZeroColumnRecursion(matrix, i, j, k, m, flag) {
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
        return matrix;
    }
}
