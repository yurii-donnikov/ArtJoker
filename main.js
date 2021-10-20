Function.prototype.myCall = function (obj, ...arg) {
    let copyObj = Object.assign({}, obj);
    copyObj.func = this;
    return copyObj.func(...arg);
}
Function.prototype.myBind = function (obj, ...arg) {
    let copyObj = Object.assign({}, obj);
    copyObj.func = this;
    return function result (...arg) {
        copyObj.func();
    }
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
