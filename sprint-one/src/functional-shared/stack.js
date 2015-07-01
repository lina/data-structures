var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
	length: 0,
	storage: {}
  };
  _.extend(stack, stackMethods);
  //debugger;
  return stack;
};

var stackMethods = {

	size: function() { 
		return this.length;
	},
	push: function(value) {
		this.storage[this.length++] = value;
	},
	pop: function(){
		if(this.length){
			return this.storage[--this.length];
		}
	}
	
};