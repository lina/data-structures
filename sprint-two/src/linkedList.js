var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);
    if (list.tail !== null){
      list.tail.next = newTail;
      list.tail = newTail;
    } else {
      list.tail = newTail;
    }
    

    if (list.head===null) {
      list.head = list.tail;
    }
  };

  list.removeHead = function(){
    var formerHead = list.head.value;
    if(list.head.next !== null)
      list.head = list.head.next;
    return formerHead;
  };

  list.contains = function(target){

    //var found = false;
    var currentNode = list.head;

    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  //{ value: 4, next: null } 

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  linkedList class, in functional style, with the following properties:
// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
// What is the time complexity of the above functions?