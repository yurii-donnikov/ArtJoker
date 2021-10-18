Function.prototype.myCall = function (obj) {
    let copyObj = Object.assign({}, obj);
    copyObj.func = this;
    return copyObj.func();
}
