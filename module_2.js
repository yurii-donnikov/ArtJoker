//1
Function.prototype.myBind = function (object, ...arg) {
    let copyObject = Object.assign({}, object);
    copyObject.func = this;
    return function () {
        return copyObject.func(...arg)
    }
}
Function.prototype.myCall = function (obj, ...arg) {
    let copyObj = Object.assign({}, obj);
    copyObj.func = this;
    return copyObj.func(...arg);
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
Array.prototype.myReduce = function(callback, startElement) {
    let result;
    if (startElement === undefined || startElement === 0) {
        result = 0;
    } else result = startElement;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    return result;
}
//3
let fibonachiElements = {
    fibonachi (number) {
        for(let i = 0; i <= number; i++) {
            if(fibonachiElements[i - 2] === undefined) {
                fibonachiElements[i] = i;
            } else {
                fibonachiElements[i] = fibonachiElements[i - 2] + fibonachiElements[i - 1];
            }
        }
    },
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next : function () {
                return {
                    value: fibonachiElements[counter],
                    done: fibonachiElements[counter++] === undefined,
                }
            }
        }
    }
}
let fibonachiElements = {
    fibonachi (number) {
        for(let i = 0; i <= number; i++) {
            if(fibonachiElements[i - 2] === undefined) {
                fibonachiElements[i] = i;
            } else {
                fibonachiElements[i] = fibonachiElements[i - 2] + fibonachiElements[i - 1];
            }
        }
    },
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next : function () {
                return {
                    value: fibonachiElements[counter],
                    done: fibonachiElements[counter++] === undefined,
                }
            }
        }
    }
}
