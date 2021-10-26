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
