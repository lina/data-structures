var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //this = Object.create(Stack.prototype);
  this.length = 0;
  this.storage = {};

};

Stack.prototype.size = function(){
	return this.length;
};
Stack.prototype.push = function(value){
	this.storage[this.length++] = value;
};
Stack.prototype.pop = function(){
	if (this.length){
		return this.storage[--this.length];
	}
};


