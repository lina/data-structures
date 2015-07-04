var BinarySearchTree = function(value){
	var obj = Object.create(BinarySearchTree.prototype);

	obj.value = value;
	obj.left = null;
	obj.right = null;
	return obj;
};

BinarySearchTree.prototype.insert = function(value) {
	var currentNode = this.value;
		if(value < currentNode) { 
			if (!this.left) { 
				this.left = BinarySearchTree(value);
			} else { 
				this.left.insert(value);
			}
		} else if (value > currentNode) {
			if (!this.right) {
				this.right = BinarySearchTree(value);
			} else {
				this.right.insert(value);
			}
		}
}

BinarySearchTree.prototype.contains = function(value) {
	//returns a boolean
	// var bool = false;
	// console.log("running");	
	var doesContain = false;
	//this.right = {value: 7, left: null, right: null}
	// console.log("checking to see if", this.value, "equals to", value);
	if (value === this.value) {
		// console.log("set doesContain to true")
		return true;
		// doesContain = true;
	} else if (value > this.value) {
		if (this.right === null) {               
			// console.log("set doesContain to false");
			return false;
			// doesContain = false;
		} 
		//else {
			// console.log("calling the .right recurse");
			return this.right.contains(value);	//value = 7
		//
	} else if (this.value > value) {
		if (this.left === null) {
			return false;
			// doesContain = false;
			// console.log("set doesContain to false");
		} 
		//else {
			// console.log("calling the .left recurse");
			return this.left.contains(value);
		//}
	}
	// return doesContain;
}


	// var current = this.value;
	// console.log(current);
	// while (current.value != value) {
	// 	if (value < current.value) {
	// 		console.log("exe1")
	// 		current = current.left;
	// 	} else if(value > current.value) {
	// 		console.log('exe2');
	// 		current = current.right;
	// 	}
	// 	if (current == null) {
	// 		return null;
	// 	}
	// }
	// console.log(current);
	// return current;


BinarySearchTree.prototype.depthFirstLog = function(cb) {
	//do a recurse function to find the leftest value
	//do a recurse function to find the rightest value

	//callback on the currentNode first
	//callback on the leftest value
	//traverse back up a tree when you have no children
	//traverse to the right when you have children
	if (this.value) {
		cb(this.value)
	} 
	if (this.left) {
		this.left.depthFirstLog(cb);
	}
	if (this.right) {
		this.right.depthFirstLog(cb);
	}
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
