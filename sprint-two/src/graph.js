


var Graph = function(){
	var graph = Object.create(Graph.prototype);
	graph.nodes = [];
	graph.edges = [];

	return graph;
};

Graph.prototype.addNode = function(node){
	//console.log(node);
	this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
	this.nodes = _.without(this.nodes, node);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	//console.log(this.edges, [fromNode, toNode]);
	return _.contains(this.edges, fromNode+" "+toNode) || _.contains(this.edges, toNode+" "+fromNode); 
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.edges.push(fromNode+" "+toNode); 
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	 this.edges = _.without(this.edge, fromNode+" "+toNode, toNode+" "+fromNode); 
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, cb);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// A graph would be great for....

// Representing how a collection of websites (or the entire world wide web) link to each other.

// Implement a graph class, in pseudoclassical style, with the following properties:
// It is an undirected graph. It does not have to be 'connected'.
// An .addNode() method that takes a new node and adds it to the graph
// A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
// A .removeNode() method that takes any node and removes it from the graph, if present. 
//All edges connected to that Node are removed as well.
// An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
// A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
// A .removeEdge() method that removes the connection between two nodes
// A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
// What is the time complexity of the above functions?

