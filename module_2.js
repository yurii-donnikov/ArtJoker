//1
Function.prototype.myBind = function (object) {
    let copyObject = Object.assign({}, object);
    copyObject.func = this;
    return function result () {
        return copyObject.func();
    }
}
Function.prototype.myCall = function (obj) {
    let copyObj = Object.assign({}, obj);
    copyObj.func = this;
    return copyObj.func();
}
//2
Array.prototype.myForEach = function(calcForEach) {
    for (let i = 0; i < this.length; i++) {
        calcForEach(this[i], i, this);
    }
}
Array.prototype.myMap = function (callback) {
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
}
Array.prototype.myFilter = function(funcFilter) {
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (funcFilter(this[i], i, this) === true) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
}
Array.prototype.myReduce = function(callback, startValue) {
    let result;
    if (startValue == undefined || startValue == 0) {
        result = 0;
    } else result = startValue;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    return result;
}
//3
let fibonachiElements = {
    0: 0,
    1: 1,
    fibonachi (number) {
        for(let i = 2; i <= number; i++) {
            fibonachiElements[i] = fibonachiElements[i - 2] + fibonachiElements[i - 1]
        }
    },
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next : function () {
                return {
                    value: fibonachiElements[counter],
                    done: typeof fibonachiElements[counter++] === 'undefined',
                }
            }
        }
    }
}
let fibonachiElements = {
    0: 0,
    1: 1,
    fibonachi(number) {
        for (let i = 2; i <= number; i++) {
            fibonachiElements[i] = fibonachiElements[i - 2] + fibonachiElements[i - 1];
        }
    },
    *[Symbol.iterator]() {
        let count = 0;
        while (typeof fibonachiElements[count] !== 'undefined') {
            yield fibonachiElements[count++];
        }
    }
}











Function.prototype.myCall = function (obj, ...arg) {
    let copyObj = Object.assign({}, obj);
    copyObj.func = this;
    return copyObj.func(...arg);
}

Array.prototype.myFilter = function(funcFilter) {
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (funcFilter(this[i], i, this) === true) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
}
Array.prototype.myForEach = function(getForEach2) {
    for (let i = 0; i < this.length; i++) {
        getForEach2(this[i], i, this)
    }
}
Array.prototype.myMap = function (callback) {
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
}
Array.prototype.myMap = function (callback, startNumber) {
    let result;
    if(startNumber == 0 || startNumber == undefined){
        result = 1;
    } else {
        result = startNumber;
    }
    for (let i = 0; i < this.length; i++) {
        result =  callback(result, this[i]);
    }
    return result;
}
let fibonachiElements = {
    0: 0,
    1: 1,
    fibonachi (number) {
        for(let i = 2; i <= number; i++) {
            fibonachiElements[i] = fibonachiElements[i - 2] + fibonachiElements[i - 1]
        }
    },
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next : function () {
                return {
                    value: fibonachiElements[counter],
                    done: typeof fibonachiElements[counter++] === 'undefined',
                }
            }
        }
    }
}
let fibonachiElements = {
    0: 0,
    1: 1,
    fibonachi(number) {
        for (let i = 2; i <= number; i++) {
            fibonachiElements[i] = fibonachiElements[i - 2] + fibonachiElements[i - 1];
        }
    },
    *[Symbol.iterator]() {
        let count = 0;
        while (typeof fibonachiElements[count] !== 'undefined') {
            yield fibonachiElements[count++];
        }
    }
}
