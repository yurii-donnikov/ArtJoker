let obj = {  
    a: 100,
    b: 200
};
let func = function( c, d ) { return this.a + this.b + c + d};
let newFunc = func.bind( obj, 300, 4);
Function.prototype.myBind = function (object, ...arg) {
    let copyObject = Object.assign({}, object);
    copyObject.func = this;
    return function () {
        return copyObject.func(...arg)
    }
}
let newFunc2 = func.myBind( obj, 3000, 2);



















let obj = {
    a: 1,
}


let func = function(c, d) {return this.a + c + d};
let bb = func.bind(obj, 40, 30)


let a = 100
Function.prototype.a = 6666

Function.prototype.myBind = function(object, ...arg) {
    let objCopy = Object.assign(object);

    objCopy.func = this

    //objCopy.func.prototype = objCopy
    console.log(objCopy.func.prototype.a)

    return objCopy
}




Function.prototype.myBind = function (object, ...arg) {
    let copyObject = Object.assign({}, object);
    copyObject.func = this;
    return function () {
        return copyObject.func(...arg)
    }
}
let bnd = func.myBind(obj)
