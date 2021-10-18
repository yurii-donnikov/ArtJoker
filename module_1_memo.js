//19.1
let memoMonogramma = function() {
    let cache = {};
    return function MonogrammaRecursion(wordOne, wordTwo, count1, count2, arrayWordOne, arrayWordTwo) {
        if (cache[0] == wordOne && cache[1] == wordTwo) {
            return true;
        }
        count1 = count1 || 0;
        count2 = count2 || 0;
        arrayWordOne = arrayWordOne || ('' + wordOne).split('');
        arrayWordTwo = arrayWordTwo || ('' + wordTwo).split('');
        if (arrayWordOne.length != arrayWordTwo.length) {
            return false;
        };
        if (arrayWordOne.toString() == arrayWordTwo.toString()) {
            cache[0] = wordOne;
            cache[1] = wordTwo;
            return true;
        } else {
            if (arrayWordOne[count1] == arrayWordTwo[count2] || count2 > arrayWordOne.length - 1) {
                if (count1 > arrayWordOne.length - 1) {
                    return false;
                };
                let deleteElem = arrayWordTwo.splice(count2, 1);
                arrayWordTwo.push(deleteElem[0]);
                count2 = 0;
                return MonogrammaRecursion(wordOne, wordTwo, ++count1, count2, arrayWordOne, arrayWordTwo);
            } else {
                if (count1 > arrayWordOne.length - 1 || count2 > arrayWordOne.length - 1) {
                    return false;
                };
                return MonogrammaRecursion(wordOne, wordTwo, count1, ++count2, arrayWordOne, arrayWordTwo);
            };
        };
    };
};
//19.3
let getDigitsInNumberMemoiz = function() {
    let cache = [];
    return function getDigitsInNumberRecursion(number, result, count, arrayNumber) {
        if (cache[0] == number) {
            return cache[1];
        };
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
            cache[0] = number;
            cache[1] = result;
            return result;
        };
    };
};
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
        };
    };
};
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
            };
            return getCountWordRecurcion(offer, result, ++count, arrayOffer);
        } else {
            cache[0] = offer;
            cache[1] = result;
            return result;
        };
    };
};
//19.6
let getFiboMemoiz = function() {
    let cache = [];
    return function getFiboRecurcion(number, result, count) {
        if (typeof cache[number] != 'undefined') {
            return cache[number];
        };
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
        };
    };
};
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
        };
    };
};
//19.9
let countSummaElemMemoiz = function() {
    let cache = [];
    return function countSumElemRecurs(array, callback, count, result) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
        };
        count = count || 0;
        result = result || 0;
        if (count < array.length) {
            if (callback(array, count)) {
                result += array[count];
                return countSumElemRecurs(array, callback, ++count, result);
            } else {
                return countSumElemRecurs(array, callback, ++count, result);
            };
        } else {
            cache[0] = array;
            cache[1] = callback + '';
            cache[2] = result;
            return result;
        };
    };
};
//19.10
let countSumNumberMemoiz = function () {
    let cache = [];
    return function countSumNumberRecursion(array, callback, count, result) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
        };
        count = count || 0;
        result = result || 0;
        if (count < array.length - 1) {
            if (callback(array, count)) {
                result += 1;
                return countSumNumberRecursion(array, callback, ++count, result);
            } else {
                return countSumNumberRecursion(array, callback, ++count, result);
            };
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
            };
        };
    };
};
//19.11
let FindNumSystem10Memoiz = function () {
    let cache = [];
    return function FindNumSystem10(numSyst2, count, arrayNum, result) {
        if (cache[0] == numSyst2) {
            return cache[1];
        };
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
        };
    };
};
let getNumSystem2Memoiz = function () {
   let cache = [];
    return function getNumSystem2(number, result) {
        if(cache[0] == number) {
            return cache[1];
        };
        let sum;
        result = result || '';
        if (typeof arguments[0] == 'undefined') {
            return;
        };
        if ((sum = number / 2) >= 1) {
            if (sum % 2 == parseInt(sum % 2)) {
                result += '0';
                return getNumSystem2(parseInt(sum), result);
            } else {
                result += '1'
                return getNumSystem2(parseInt(sum), result);
            };
        } else {
            result += '1';
            cache[0] = number;
            cache[1] = result.split('').reverse().join('');
            return result.split('').reverse().join('');
        };
    };
};
//19.12(9)
let getSumDubleArrayMemoiz = function () {
    let cache = [];
    return function getSumDubleArrayRecurcion(array, callback, i, j, result) {
        if (cache[0] == array && cache[1] == (callback + '')) {
            return cache[2];
        };
        i = i || 0;
        j = j || 0;
        result = result || 0;
        if (i < array.length) {
            if (j < array[i].length) {
                if (callback(i, j)) {
                    result += array[i][j];
                }
                return getSumDubleArrayRecurcion(array, callback, i, ++j, result);
            };
            j = 0;
            return getSumDubleArrayRecurcion(array, callback, ++i, j, result);
        } else {
            cache[0] = array;
            cache[1] = callback + '';
            cache[2] = result;
            return result;
        };
    };
};
