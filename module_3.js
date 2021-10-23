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

    remove(value, node, parent){
        node = node || this;
        parent = parent || null;
        if(node.#value === value) {
            console.log('rgd')
            console.log(parent.#value)
            console.log('rg')
            //console.log(this)
        }
            if(node.#value < value) {
                //console.log(node)
                return this.remove(value, node.#right, node)
            }

            // if (node.#left === null && node.#right === null){
            //     node.#value = null;
            // }
            // if(node.#left === null && node.#right){
            //     node.#value = node.#right.#value
            //     node.#left = node.#right.#left
            //     node.#right = node.#right.#right
            //     console.log(node)
            // }
            // if (node.#right === null && node.#left) {

            // }
      
    }
}


let node = new Node();
node.insert(10);
node.insert(20);
node.insert(30);
node.insert(40);
node.insert(50);
console.dir(node)


