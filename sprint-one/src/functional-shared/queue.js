var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {
  	front: 0,
  	back: 0,
  	storage: {}
  };
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {

	size: function(){
		return this.back - this.front;
	},
	enqueue: function(value) {
		this.storage[this.back++] = value;
	},
	dequeue: function() {
		if (this.back > this.front)
			return this.storage[this.front++];
	}

};



