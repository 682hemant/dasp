class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value
	}
}
class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			var current = this.root;
			while (true) {
				if(value === current.value) return undefined
				if (value < current.value) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}

				} else if (value > current.value) {
						if (current.right === null){
							current.right = newNode;
							return this;
						}
						else {
							current = current.right;
						}
        }

			}
		}
	}
	find(value){
		if(this.root === null) return false;
		let current = this.root;
		let found = flase;
		while(!false && current){
			if(value < current.value){
				current = current.left;
			}else if(value > current.value){
				current = current.right;
			}
			else{
				found = true;
			}
		}
		return current;
	}
}
let tree = new BinarySearchTree()
