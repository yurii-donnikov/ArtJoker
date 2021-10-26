class Node {
    #value;
    #left;
    #right;
    constructor() {
        this.#value = null;
        this.#left = null;
        this.#right = null;
    }
    insert(value, node) {
        node = node || this;
        if (node.#value === null) {
            node.#value = value;
            return true;
        }
        if (node.#value > value) {
            if (node.#left === null) {
                node.#left = new Node();
            }
            return this.insert(value, node.#left);
        }
        if (node.#value < value) {
            if (node.#right === null) {
                node.#right = new Node();
            }
            return this.insert(value, node.#right);
        }
    }
    search(value, node) {
        node = node || this;
        if(arguments[0] === undefined){
            return null;
        }
        if(node.#value === value){
            return node.#value;
        }
        if(node.#value > value) {
            if(node.#left === null) {
                return null;
            }
            return this.search(value, node.#left);
        }
        if(node.#value < value) {
            if(node.#right === null) {
                return null;
            }
            return this.search(value, node.#right);
        }
    }
    remove(value, node, linkParent, flag){
        if(arguments[0] === undefined){
            return null;
        }
        if(!this.search(value)){
            return null;
        }
        node = node || this;
        linkParent = linkParent || this;
        flag = flag || false;
        if(flag) {
          if (node.#right !== null) {
          return this.remove(value, node.#right, node, flag);
          } else {
            linkParent.#right = null;
            return node.#value;
          }
        }
        if(node.#value === value) {
          if (node.#left === null && node.#right === null){
              if(linkParent.#left && linkParent.#left.#value === node.#value){
                linkParent.#left = null;
              } else{
                linkParent.#right = null;
              }
          }
          if(node.#left === null && node.#right){
              node.#value = node.#right.#value;
              node.#right = node.#right.#right;
          }
          if(node.#left && node.#right === null){
              node.#value = node.#left.#value;
              node.#left = node.#left.#left;
          }
          if(node.#left && node.#right) {
            if(node.#left.#right) {
              flag = true;
              node.#value = this.remove(value, node.#left, node, flag);
              flag = false;
            } else {
              node.#value = node.#left.#value;
              node.#left = node.#left.#left;
            }
          }
        } else {
          if(node.#value < value) {
              return this.remove(value, node.#right, node, flag);
          }
          if(node.#value > value) {
              return this.remove(value, node.#left, node, flag);
          }
        }
    }
}
Array.prototype.sortSelection = function (callback){
    let array = this;
    for(let i = 0; i < array.length; i++){
        let resultElement = array[i];
        let index;
        for(let j = i + 1; j < array.length; j++){
            if(callback(resultElement, array[j])){
                resultElement = array[j];
                index = j;
            }
        }
        if(index){
            let temp = array[i];
            array[i] = resultElement;
            array[index] = temp;
        }
    }
}
Array.prototype.sortBubble = function (callback) {
    let array = this;
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (callback(array[j], array[j + 1])) {
          let copyElement = array[j];
          array[j] = array[j + 1];
          array[j + 1] = copyElement;
        }
      }
    }
}
