function node(data) {
    this.data = data;
    this.next = null;
}

function stack() {
    /* record first node */
    this.top = null;
}
  
stack.prototype.push = function(data) {
    let newNode = new node(data);

    newNode.next = this.top; 
    this.top = newNode;
}
  
stack.prototype.pop = function() {
    if (this.top !== null) {
      let topItem = this.top.data;
      this.top = this.top.next;
      return topItem;
    }
    return null;
}

stack.prototype.size = function() {
    let curr = this.top;
    let count = 0
    while (curr) {
        count++;
        curr = curr.next;
    }
    return count
}