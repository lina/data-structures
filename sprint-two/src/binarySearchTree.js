var BinarySearchTree = function(value){
	var binaryTree = Object.create(BinarySearchTree.prototype);
	binaryTree.left = null;
	binaryTree.right = null;
	binaryTree.value = value;

	return binaryTree;
};
//console.log(value);

BinarySearchTree.prototype.insert = function(value){
	//console.log(this.value);

	function searchTree(currentNode, value){
	if (currentNode) {
			if (currentNode.value > value){
				if (!currentNode.right){
					currentNode.right = BinarySearchTree(value);
				}
				else {
					searchTree(currentNode.right, value);
				}
			} else {
				if (!currentNode.left){
					currentNode.left = BinarySearchTree(value);
				}
				else {
					searchTree(currentNode.left, value);
				}
			}
		} else {
			currentNode.value = value;
		}
	}

	searchTree(this);
};

BinarySearchTree.prototype.contains = function(value){

	// returns a boolean
};

BinarySearchTree.prototype.depthFirstLog = function(cb){

};
/*
 * Complexity: What is the time complexity of the above functions?
 */


// at Context.<anonymous> (file:///Users/student/benbiran/2015-06-data-structures/sprint-two/spec/binarySearchTreeSpec.js:9:28)
//     at Test.require.register.Runnable.run (file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4039:32)
//     at Runner.require.register.Runner.runTest (file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4404:10)
//     at file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4450:12
//     at next (file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4330:14)
//     at file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4339:7
//     at next (file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4287:23)
//     at file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4302:7
//     at Hook.require.register.Runnable.run (file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4041:5)
//     at next (file:///Users/student/benbiran/2015-06-data-structures/lib/mocha/mocha.js:4296:10)