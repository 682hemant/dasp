//stacks with array
// let stacks = [];
// stacks.push(1);
// stacks.push(2);
// //stacks.pop()
// stacks.unshift(2);
// console.log(stacks[0]);

//stack using linked list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//      let temp = this.first;
//      this.first = newNode;
//      this.first.next = temp;

//     }
//     return ++this.size;
//   }
//   pop() {
//     if (!this.first) return null;
//     var temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--
//     return temp.value;
//   }
// }

// let stack = new stack();


// queues

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		let newNode = new Node(val);
		if(!this.first){
			this.first = newNode;
			this.last = newNode;
		}else{
			this.last.next = newNode;
			this.last = newNode;		
		}
		this.size++;
		return this;
	}
	dequeue() {
		if(!this.first) return null;
		let temp = this.first;
		if(this.first === this.last){
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
let q = new Queue();
