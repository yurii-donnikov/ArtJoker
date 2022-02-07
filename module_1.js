//les1
function monogramma(wordOne, wordTwo) {
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

function monogramma (w1, w2) {
  let word1 = w1.split('');  // ['a', 's', 'd']
  let word2 = w2.split('');  // ['d', 's', 'a']
  if(word1.length !== word2.length) {
    return false;
  }
  for (let i = 0; i < word1.length; i++) {
    for(let j = 0; j < word1.length; j++) {
      if(word1[i] === word2[j]) {
        word2.splice(j, 1);
        j--;
        break;
      }
    }
  };
  if(!word2.length) {

    return true;
  }

  return false;
} 

function monogramma (word1, word2) {
  let numberCode = 0;
  let numberCode2 = 0;
  for(let i  = 0; i < word1.length; i++) {
    numberCode += word1[i].charCodeAt()
  }
  for(let i  = 0; i < word2.length; i++) {
    numberCode2 += word2[i].charCodeAt()
  }
 
  return numberCode === numberCode2
} 
//les3
function calculateDigitsNumber(number) {
    let resultObject = {};
    let numberArray = ('' + number).split('');
    if (typeof arguments[0] == 'undefined') {
        return null;
    }
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
function findSumUniqueWord(offer, word) {
    let counter = 0;
    let arrayOffer = offer.split(' ');
    if(!arguments[1]){
        return null;
    }
    for (let i = 0; i < arrayOffer.length; i++) {
        if (word == arrayOffer[i]) {
            counter++;
        }
    }
    return counter;
}
//les5
function findSumWord(offer) {
    let resultObject = {};
    let count = 0;
    let arrayOffer = offer.split(' ');
    if (arguments[0].length == 0) {
        return null;
    }
    for (let i = 0; i < arrayOffer.length; i++) {
        let count = 0;
        for (let j = 0; j < arrayOffer.length; j++) {
            if (arrayOffer[i] != arrayOffer[j]) {
                continue;
            } else count++;
        }
        resultObject[arrayOffer[i]] = count;
    }
    return resultObject;
}
//les6
function calculateFibonachi(number) {
    let result = [0, 1];
    let start = result[result.length - 2];
    let stop = result[result.length - 1];
    if(typeof arguments[0] == 'undefined') {
        return null;
    }
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
function calculateFactorial(number) {
    let result = 1;
    if(typeof arguments[0] == 'undefined'){
        return null;
    }
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
//les9
function calculateSumElements(array, callback) {
    let result = 0;
    array.forEach(i => {
        if (callback(i)) {
            result += i;
        }
    })
    return result;
}
calculateSumElements(mas, ((i) => { return i }));
//les10
Array.prototype.calculateAmountElements = function (callback) {
    let result = 0;
    this.forEach(i => {
        if (callback(i)) {
            result++;
        }
    })
    return result;
}
mas.countElemArray(((i) => { return i > 0 }));
//les11
function findNumberSystemTen(numberSystemTwo) {
    let result = 0;
    let arraySystTwo = ('' + numberSystemTwo).split('').reverse();
    for (let i = 0; i < arraySystTwo.length; i++) {
        result += arraySystTwo[i] * (Math.pow(2, i));
    };
    return result;
};
function findNumberSystemTwo(numberSystemTen) {
    let res;
    if ((res = numberSystemTen / 2) >= 1) {
        if (res % 2 == parseInt(res % 2)) {
            return (findNumberSystemTwo(parseInt(res)) + '0');
        } else {
            return (findNumberSystemTwo(parseInt(res)) + '1');
        }
    }
    return "1";
}
//les12
  //12.9
function calculateSumElementsDubleArray(array, callback) {
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
calculateSumElementsDubleArray(arr2, ((i) => { return i > 0 }));
  //12.10
function calculateAmountElementsDubleArray(array, callback) {
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
calculateAmountElementsDubleArray(arr2, ((i) => { return i > 0 }));
//les13
function sumMinToMax (array, callback) {
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
sumMinToMax(arr, ((i) => { return i > 0 }));
//les14
function AvergeNumber(array, callback) {
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
AvergeNumber(arr, ((i) => { return (i % 2 == 0) }));
  //for duble array 
function AvergeNumberDobleArr(array) {
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
AvergeNumberDobleArr(arr2, ((i) => { return (i % 2 == 0) }));
//les15
function transponentMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
    }
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
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
function deleteValueString(array, value) {
    for (let i = 0; i < array.length; i++) {
        array[i].forEach(j => {
            if (j == value) {
                array.splice(i, 1);
                i--;
            }
        })
    }
    return array;
}
function deleteValueColumn(array, value) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == value) {
                array.map(function(item) {
                    item.splice(j, 1);
                })
                j--;
            }
        }
    }
    return array;
}
