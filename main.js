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
