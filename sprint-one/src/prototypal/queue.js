var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.front = 0;
  queue.back = 0;

  return queue;
};

var queueMethods = {};


queueMethods.size = function(){
	return this.back - this.front;
};
queueMethods.enqueue = function(value) {
	this.storage[this.back++] = value;
};
queueMethods.dequeue = function(){
	if (this.back > this.front)
		return this.storage[this.front++];
};