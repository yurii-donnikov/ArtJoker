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
        if(node.#value === value){
            return true;
        }
        if(node.#value > value) {
            if(node.#left === null) {
                return false;
            }
            return this.search(value, node.#left);
        }
        if(node.#value < value) {
            if(node.#right === null) {
                return false;
            }
            return this.search(value, node.#right);
        }
    }



    remove(value, node, linkParent, flag){
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
            console.log(linkParent)
            console.log('rgr')
              if(linkParent.#left.#value === node.#value){
                linkParent.#left = null;
                return true;
              } else{
                linkParent.#right = null;
                return true;
              }
          }
          if(node.#left === null && node.#right){
              node.#value = node.#right.#value;
              node.#right = node.#right.#right;
              return true;
          }
          if(node.#left && node.#right === null){
              node.#value = node.#left.#value;
              node.#left = node.#left.#left;
              return true;
          }
          if(node.#left && node.#right) {
            if(node.#left.#right) {
              flag = true;
              node.#value = this.remove(value, node.#left, node, flag)
              flag = false;
              return true;
            } else {
              node.#value = node.#left.#value;
              node.#left = node.#left.#left;
              return true;
            }
          }
        } else {
          if(node.#value < value) {
              return this.remove(value, node.#right, node, flag)
          }
          if(node.#value > value) {
              return this.remove(value, node.#left, node, flag)
          }
        }
    }
}


let node = new Node();
node.insert(50);
node.insert(60);
node.insert(70);
node.insert(75);
node.insert(65);
node.insert(66);

console.dir(node)
