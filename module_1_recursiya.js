//les18.1
function monogrammaRecursion(wordOne, wordTwo, count1, count2, arrayWordOne, arrayWordTwo) {
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
function calculateDigitsNumber(number, result, count, arrayNumber) {
    count = count || 0;
    result = result || {};
    arrayNumber = arrayNumber || ('' + number).split('');
    if (typeof arguments[0] == 'undefined') {
        return null;
    }
    if (count < arrayNumber.length) {
        if (result[arrayNumber[count]]) {
            result[arrayNumber[count]]++;
        } else {
            result[arrayNumber[count]] = 1;
        }
        return calculateDigitsNumber(number, result, ++count, arrayNumber);
    }
    return result;
}
//18.4
function findSumUniqueWord(offer, word, count) {
    count = count || 0;
    arrayOffer = offer.split(' ');
    if(!arguments[1]){
        return null;
    }
    if (count < arrayOffer.length) {
        if (arrayOffer[count] == word) {
            return 1 + findSumUniqueWord(offer, word, ++count);
        }
        return 0 + findSumUniqueWord(offer, word, ++count);
    }
    return 0;
}
//18.5
function findSumWord(offer, result, count, arrayOffer) {
    count = count || 0;
    result = result || {};
    arrayOffer = arrayOffer || ('' + offer).split(' ');
    if (!arguments[0]) {
        return null;
    }
    if (count < arrayOffer.length) {
        if (result[arrayOffer[count]]) {
            result[arrayOffer[count]]++;
        } else {
            result[arrayOffer[count]] = 1;
        }
        return findSumWord(offer, result, ++count, arrayOffer);
    }
    return result;
}
//18.6
function calculateFibonachi(number, result, count) {
    result = result || [0, 1];
    count = count || 0;
    if (typeof arguments[0] == 'undefined') {
        return null;
    }
    let start = result[result.length - 2];
    let stop = result[result.length - 1];
    let sum = start + stop;
    if (count < number - 1) {
        result.push(sum);
        return calculateFibonachi(number, result, ++count);
    }
    return result;
}
//18.8
function calculateFactorial(number, count) {
    count = count || 1;
    if (typeof arguments[0] == 'undefined') {
        return null;
    }
    if (count <= number) {
        return count * calculateFactorial(number, ++count);
    }
    return 1;
}
//18.9
function calculateSumElements(array, callback, count, result) {
    count = count || 0;
    result = result || 0;
    if (count < array.length) {
        if (callback(array, count)) {
            return array[count] + calculateSumElements(array, callback, ++count, result);
        }
        return calculateSumElements(array, callback, ++count, result);
    }
    return 0;
}
calculateSumElements(arr, (function(i, j) { return (i[j]) > 0 }));
//18.10
function calculateAmountElements(array, callback, count, result) {
    count = count || 0;
    result = result || 0;
    if (count < array.length - 1) {
        if (callback(array, count)) {
            return (result + 1) + calculateAmountElements(array, callback, ++count, result);
        }
        return calculateAmountElements(array, callback, ++count, result);
    } else {
        if (callback(array, count)) {
            return ++result;
        }
        return result;
    }
}
calculateAmountElements(arr, (function(i, j) { return (i[j] == 0) }));
//18.11
function FindNumSystemTen(numSystTwo, count, arrayNum) {
    arrayNum = arrayNum || ('' + numSystTwo).split('').reverse();
    count = count || 0;
    if (count < arrayNum.length) {
        return arrayNum[count] * (Math.pow(2, count)) + FindNumSystemTen(numSystTwo, ++count, arrayNum);
    }
    return 0;
}
function findNumSystemTwo(numSystTen) {
    let res;
    if (typeof arguments[0] == 'undefined') {
        return;
    }
    if ((res = numSystTen / 2) >= 1) {
        if (res % 2 == parseInt(res % 2)) {
            return (findNumSystemTwo(parseInt(res)) + '0');
        }
        return (findNumSystemTwo(parseInt(res)) + '1');
    }
    return "1";
}
//18.12(9)
function calculateSumElementsDubleArray(array, callback, index, index2, result) {
    index = index || 0;
    index2 = index2 || 0;
    result = result || 0;
    if (index < array.length) {
        if (index2 < array[index].length) {
            if (callback(index, index2)) {
                result += array[index][index2];
            }
            return calculateSumElementsDubleArray(array, callback, index, ++index2, result);
        }
        index2 = 0;
        return calculateSumElementsDubleArray(array, callback, ++index, index2, result);
    }
    return result;
}
calculateSumElementsDubleArray(arr2, ((i) => { return i > 0 }));
//18.12(10)
function calculateAmountElementsDubleArray(array, callback, countOne, countTwo, result) {
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
            return calculateAmountElementsDubleArray(array, callback, countOne, ++countTwo, result);
        }
        countTwo = 0;
        return calculateAmountElementsDubleArray(array, callback, ++countOne, countTwo, result);
    }
    return result;
}
calculateAmountElementsDubleArray(arr2, (function(countOne, countTwo) { return arr2[countOne][countTwo] > 0 }));
//18.13
function sumMinToMax(array, callback, minElem, maxElem, index, index2) {
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
        return sumMinToMax(array, callback, minElem, maxElem, ++index);
    } else {
        if (index2 <= maxElem) {
            minElem = minElem + index2;
            return sumMinToMax(array, callback, minElem, maxElem, index, ++index2);
        }
        return minElem - 1;
    }
}
sumMinToMax(arr, ((i) => { return arr[i] > 0 }));
//18.14
function AvergeNumber(array, callback, result, count, amountElem) {
    count = count || 0;
    result = result || 0;
    amountElem = amountElem || 0;
    if (count < array.length) {
        if (callback(count)) {
            result += array[count];
            return AvergeNumber(array, callback, result, ++count, ++amountElem);
        }
        return AvergeNumber(array, callback, result, ++count, amountElem);
    }
    return (result / amountElem);
}
AvergeNumber(arr, ((i) => { return (arr[i] % 2) == 0 }));
function AvergeNumberDobleArray(array, callback, countOne, countTwo, result, amountElem) {
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
            return AvergeNumberDobleArray(array, callback, countOne, ++countTwo, result, amountElem);
        }
        countTwo = 0;
        return AvergeNumberDobleArray(array, callback, ++countOne, countTwo, result, amountElem);
    }
    return result / amountElem;
}
AvergeNumberDobleArray(arr2, (function(countOne, countTwo) { return (arr2[countOne][countTwo] % 2 == 0) }));
//18.15
function transponentMatrix(matrix, index, index2, result) {
    result = result || [];
    index = index || 0;
    index2 = index2 || 0;
    if (index < matrix[0].length) {
        if (typeof result[index] == 'undefined') {
            result[index] = [];
        }
        if (index2 < matrix.length) {
            result[index][index2] = matrix[index2][index];
            return transponentMatrix(matrix, index, ++index2, result);
        }
        index2 = 0;
        return transponentMatrix(matrix, ++index, index2, result);
    }
    return result;
}
//18.16
function addTwoMatrix(matrix, matrix2, index, index2, result) {
    result = result || [];
    index = index || 0;
    index2 = index2 || 0;
    if (index < matrix.length) {
        if (typeof result[index] == 'undefined') {
            result[index] = [];
        }
        if (index2 < matrix[0].length) {
            result[index][index2] = matrix[index][index2] + matrix2[index][index2];
            return addTwoMatrix(matrix, matrix2, index, ++index2, result);
        }
        index2 = 0;
        return addTwoMatrix(matrix, matrix2, ++index, index2, result);
    }
    return result;
}
//18.17
function deleteValueString(matrix, value, index, index2) {
    index = index || 0;
    index2 = index2 || 0;
    if (matrix.length == value) {
        return matrix;
    }
    if (index < matrix.length) {
        if (index2 < matrix[index].length) {
            if (matrix[index][index2] == value) {
                matrix.splice(index, 1);
                if (index != value) {
                    --index;
                }
                return deleteValueString(matrix, value, index, index2);
            }
            return deleteValueString(matrix, value, index, ++index2);
        }
        index2 = 0;
        return deleteValueString(matrix, value, ++index, index2);
    }
    return matrix;
}
function deleteValueColumn(matrix, value, index, index2, index3, index4, flag) {
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
                    return deleteValueColumn(matrix, value, index, index2, ++index3, index4, flag);
                }
                return deleteValueColumn(matrix, value, index, index2, index3, ++index4, flag);
            } else {
                index3 = 0;
                index4 = 0;
                flag = false;
                if (index2 != value) {
                    --index2;
                } else {
                    index2 = 0;
                    return deleteValueColumn(matrix, value, index, index2, index3, index4, flag);
                }
                return deleteValueColumn(matrix, value, index, ++index2, index3, index4, flag);
            }
        }
        if (index2 < matrix[index].length) {
            if (matrix[index][index2] == value) {
                flag = true;
                index3 = 0;
                index4 = 0;
                return deleteValueColumn(matrix, value, index, index2, index3, index4, flag);
            }
            return deleteValueColumn(matrix, value, index, ++index2, index3, index4, flag);
        }
        index2 = 0;
        return deleteValueColumn(matrix, value, ++index, index2, index3, index4, flag);
    }
    return matrix;
}
