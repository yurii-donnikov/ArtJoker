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
    let mass = [];
    for (let i = 0; i < this.length; i++) {
        if (  funcFilter(this[i], i, this)   === true) {
            mass.push(this[i]);
        }
    }
    return mass;
}
