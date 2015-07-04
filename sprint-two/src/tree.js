var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	var child = Tree(value);
	this.children.push(child);
};

treeMethods.contains = function(target){
	//console.log("something");
	var searchTree = function(currentNode) {
		if (currentNode && currentNode.value === target) {
			return 1;
		} 
		if (currentNode && currentNode.children.length) {
			var sumChildren = 0;
			for (var i = 0 ; i < currentNode.children.length; i++) {
				sumChildren += searchTree(currentNode.children[i]);
			}
			return sumChildren;
		} 
		return 0;
		
	}
	return searchTree(this) > 0 ? true : false;
	

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
