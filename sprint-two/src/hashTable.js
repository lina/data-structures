var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[i]) {
    this._storage[i] = [];
  }
  this._storage[i].push({key: k, value: v});

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
   for (var j = 0; j < this._storage[i].length; j++){
      if (this._storage[i][j] && this._storage[i][j].key === k){
        return this._storage[i][j].value;
      }
   }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].value = null;

   for (var j = 0; j < this._storage[i].length; j++){
      if (this._storage[i][j] && this._storage[i][j].key === k){
        this._storage[i][j].value = null;
        //this._storage = _.without(this._storage, this._storage[i][j]);
        // return this._storage[i][j].value;
      }
   }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */