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
    }
    return result;
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
    }
    return 0;
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
    }
    return result;
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
    }
    return result;
}
//18.8
function getRecursFactorial(number, count) {
    count = count || 1;
    if (typeof arguments[0] == 'undefined') {
        return 0;
    }
    if (count <= number) {
        return count * getRecursFactorial(number, ++count);
    }
    return 1;
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
    }
    return 0;
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
    }
    return 0;
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
function getSumDubleArrayRecurcion(array, callback, index, index2, result) {
    index = index || 0;
    index2 = index2 || 0;
    result = result || 0;
    if (index < array.length) {
        if (index2 < array[index].length) {
            if (callback(index, index2)) {
                result += array[index][index2];
            }
            return getSumDubleArrayRecurcion(array, callback, index, ++index2, result);
        }
        index2 = 0;
        return getSumDubleArrayRecurcion(array, callback, ++index, index2, result);
    }
    return result;
}
getSumDubleArrayRecurcion(arr, (function(i, j) { return arr[i][j] > 0 }))
//18.12(10)
function getNumbersDubleArrayRecurcion(array, callback, countOne, countTwo, result) {
    countOne = countOne || 0;
    countTwo = countTwo || 0;
    result = result || {};
    if (countOne < array.length) {
        if (countTwo < array[countOne].length) {
            if (callback(countOne, countTwo)) {
                if (result[array[countOne][countTwo]]) {
                    result[array[countOne][countTwo]]++;
                } else result[array[countOne][countTwo]] = 1;
            }
            return getNumbersDubleArrayRecurcion(array, callback, countOne, ++countTwo, result);
        }
        countTwo = 0;
        return getNumbersDubleArrayRecurcion(array, callback, ++countOne, countTwo, result);
    }
    return result;
}
getNumbersDubleArrayRecurcion(mas, (function(countOne, countTwo) { return mas[countOne][countTwo] > 0 }));
//18.13
function getSumMinMaxRecurcion(array, callback, minElem, maxElem, index, index2) {
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
        return getSumMinMaxRecurcion(array, callback, minElem, maxElem, ++index);
    } else {
        if (index2 <= maxElem) {
            minElem = minElem + index2;
            return getSumMinMaxRecurcion(array, callback, minElem, maxElem, index, ++index2);
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
    }
    return (result / amountElem);
}
getAverageSumArray(mas, ((i) => { return (mas[i] % 2) == 0 }))
function getAverageSumArrayDubleRecursion(array, callback, countOne, countTwo, result, amountElem) {
    countOne = countOne || 0;
    countTwo = countTwo || 0;
    result = result || 0;
    amountElem = amountElem || 0;
    if (countOne < array.length) {
        if (countTwo < array[countOne].length) {
            if (callback(countOne, countTwo)) {
                result += array[countOne][countTwo];
                amountElem++;
            }
            return getAverageSumArrayDubleRecursion(array, callback, countOne, ++countTwo, result, amountElem);
        }
        countTwo = 0;
        return getAverageSumArrayDubleRecursion(array, callback, ++countOne, countTwo, result, amountElem);
    }
    return (result / amountElem);
}
getAverageSumArrayDubleRecursion(mas, (function(countOne, countTwo) { return (mas[countOne][countTwo] % 2 == 0) }))
//18.15
function findTransponentMatrixRecursion(matrix, index, index2, result) {
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
    return result;
}
//18.16
function addTwoMatrixRecurcion(matrix, matrix2, index, index2, result) {
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
    return result;
}
//18.17
function deleteZeroStringRecursion(matrix, index, index2) {
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
                return deleteZeroStringRecursion(matrix, index, index2);
            }
            return deleteZeroStringRecursion(matrix, index, ++index2);
        }
        index2 = 0;
        return deleteZeroStringRecursion(matrix, ++index, index2);
    }
    return matrix;
}
function deleteZeroColumnRecursion(matrix, index, index2, index3, index4, flag) {
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
    return matrix;
}
