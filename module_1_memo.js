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
//19.2
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
