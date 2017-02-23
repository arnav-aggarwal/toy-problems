/*
Tree Breadth-First Select
Implement a breadth-first method on a tree class.

BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order,
and returns a flat array of node values of the tree for which the filter returns true.
 */

var Queue = function() {
  var storage = [];

  this.enqueue = function(item) {
    storage.push(item);
  };

  this.dequeue = function() {
    return storage.shift();
  };
};

var Tree = function(value){
  this.value = value;
  this.children = [];
  this.depth = 0;
};

////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------------------------- //
////////////////////////////////////////////////////////////////////////////////
Tree.prototype.BFSelect = function(filter) {
  let queue = new Queue();
  let breadthOrder = [];
  let node;
  queue.enqueue(this);
  while(node = queue.dequeue()) {
    filter(node.value, node.depth) && breadthOrder.push(node.value);
    node.children.forEach(child=>queue.enqueue(child));
  }
  return breadthOrder;
};
////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------------------------- //
////////////////////////////////////////////////////////////////////////////////

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
    child.depth = this.depth + 1;
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
    
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};


Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};