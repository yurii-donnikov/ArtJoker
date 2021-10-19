//les1
function resultMonogramma(wordOne, wordTwo) {
    let arrayWordOne = wordOne.split('');
    let arrayWordTwo = wordTwo.split('');
    if (arrayWordOne.length == arrayWordTwo.length) {
        for (let i = 0; i < arrayWordOne.length; i++) {
            for (let j = 0; j < arrayWordTwo.length; j++) {
                if (arrayWordOne[i] == arrayWordTwo[j]) {
                    arrayWordTwo.splice(j, 1);
                }
            }
        }
    } else {
        return false;
    }
    return (arrayWordTwo.length == 0);
}
//les3
function getNumberDigits(number) {
    let resultObject = {};
    let numberArray = ('' + number).split('');
    for (let i = 0; i < numberArray.length; i++) {
        let counterNumber = 0;
        for (let j = 0; j < numberArray.length; j++) {
            if (numberArray[i] != numberArray[j]) {
                continue;
            } else counterNumber++;
        }
        resultObject[numberArray[i]] = counterNumber;
    }
    return resultObject;
}
//les4
function getSumUniqueWord(offer, word) {
    let counter = 0;
    let arrayOffer = offer.split(' ');
    for (let i = 0; i < arrayOffer.length; i++) {
        if (word == arrayOffer[i]) {
            counter++;
        }
    }
    return counter;
}
//les5
function getNumberWord(offer) {
    let resultObject = {};
    let counter = 0;
    let arrayOffer = offer.split(' ');
    if (arguments[0].length == 0) {
        return 0;
    }
    for (let i = 0; i < arrayOffer.length; i++) {
        let counter = 0;
        for (let j = 0; j < arrayOffer.length; j++) {
            if (arrayOffer[i] != arrayOffer[j]) {
                continue;
            } else counter++;
        }
        resultObject[arrayOffer[i]] = counter;
    }
    return resultObject;
}
//les6
function getFibonachi(number) {
    let result = [0, 1];
    let start = result[result.length - 2];
    let stop = result[result.length - 1];
    for (let i = 1; i < number; i++) {
        result.push((start + stop));
        start = result[result.length - 2];
        stop = result[result.length - 1];
    }
    return result;
}
//les7
class Rectangle {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    square() {
        return this.width * this.height;
    }
    perimeter() {
        return (this.width * 2) + (this.height * 2);
    }
}
class Triangle {
    a;
    b;
    c;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    square() {
        return 1 / 2 * this.a * this.b * Math.sin((this.c * Math.PI) / 180);
    }
    perimeter() {
        return this.a + this.b + this.c;
    }
}
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    square() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
        return Math.PI * 2 * this.radius;
    }
}
//les8
function getFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
//les9
function countElemOddNumber(array, callback) {
    let result = 0;
    array.forEach(i => {
        if (callback(i)) {
            result += i;
        }
    })
    return result;
}
countElemOddNumber(mas, ((i) => { return i }));
//les10
function countElem(array, callback) {
    let result = 0;
    array.forEach(i => {
        if (callback(i)) {
            result++;
        }
    })
    return result;
}
countElem(mas, ((i) => { return i > 0 }));
//les11
function getNumSystemTen(numberSystemTwo) {
    let result = 0;
    let arraySystTwo = ('' + numberSystemTwo).split('').reverse();
    for (let i = 0; i < arraySystTwo.length; i++) {
        result += arraySystTwo[i] * (Math.pow(2, i));
    };
    return result;
};
function getNumSystemTwo(numberSystemTen) {
    let res;
    if ((res = numberSystemTen / 2) >= 1) {
        if (res % 2 == parseInt(res % 2)) {
            return (getNumSystemTwo(parseInt(res)) + '0');
        } else {
            return (getNumSystemTwo(parseInt(res)) + '1');
        }
    } else {
        return "1";
    }
}
//les12
  //12.9
function countSumElemDubleArr(array, callback) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (callback(j)) {
                resultNum += j;
            }
        })
        result[i] = resultNum;
        resultNum = 0;
    })
    return result;
}
countSumElemDubleArr(arr, ((i) => { return i > 0 }));
  //12.10
function countElemDubleArray(array, callback) {
    let result = {};
    let resultNum = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (callback(j)) {
                resultNum++;
            }
        })
        result[i] = resultNum;
        resultNum = 0;
    })
    return result;
}
countElemDubleArray(arr, ((i) => { return i > 0 }));
//les13
function getSumMinMax(array, callback) {
    let workingArray = [];
    array.forEach(i => {
        if (callback(i)) {
            workingArray.push(i);
        }
    })
    let minNumber = workingArray[0];
    let maxNumber = workingArray[0];
    let result = 0;
    for (var i = 0; i < workingArray.length; i++) {
        if (minNumber > workingArray[i]) {
            minNumber = workingArray[i];
        }
    }
    for (var i = 0; i < workingArray.length; i++) {
        if (maxNumber < workingArray[i]) {
            maxNumber = workingArray[i];
        }
    }
    for (let i = minNumber; i <= maxNumber; i++) {
        result += i;
    }
    return result;
}
getSumMinMax(arr, ((i) => { return i > 0 }));
//les14
function countAvergeElem(array, callback) {
    let sumElem = 0;
    let numberElem = 0;
    array.forEach(i => {
        if (callback(i)) {
            sumElem += i;
            numberElem++;
        }
    })
    return (sumElem / numberElem);
}
countAvergeElem(arr, ((i) => { return (i % 2 == 0) }));
  //for duble array 
function AvergeElemDobleArr(array) {
    let chetnMass = [];
    let chetsumElem = 0;
    array.forEach(i => {
        i.forEach(j => {
            if (j % 2 == 0) {
                chetnMass.push(j);
            }
        })
    })
    chetnMass.forEach(i => {
        chetsumElem += i;
    })
    return (chetsumElem / chetnMass.length);
}
AvergeElemDobleArr(arr, ((i) => { return (i % 2 == 0) }));
//les15
function findTransponentMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
    }
    for (let j = 0; j < matrix[0].length; j++) {
        for (let k = 0; k < matrix.length; k++) {
            result[j][k] = matrix[k][j];
        }
    }
    return result;
}
//les16
function addTwoMatrix(matrix, matrix2) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            result[i].push(matrix[i][j] + matrix2[i][j]);
        }
    }
    return result;
}
//les17
function deleteStrZero(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].forEach(j => {
            if (j == 0) {
                array.splice(i, 1);
                i--;
            }
        })
    }
    return array;
}
function deleteColumnZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == 0) {
                array.map(function (item) {
                    item.splice(j, 1);
                })
                j--;
            }
        }
    }
    return array;
}
