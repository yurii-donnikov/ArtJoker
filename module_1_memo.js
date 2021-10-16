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
