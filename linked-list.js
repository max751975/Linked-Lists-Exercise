/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }
    let val = this.tail.val;
    let curr = this.head;
    let count = 0;
    while (count < this.length - 2) {
      curr = curr.next;
      count++;
    }

    curr.next = null;
    this.tail = curr;
    this.length -= 1;

    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("List is empty");
    }
    let val = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    if (length === 0) {
      this.tail = this.head;
    }

    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    if (idx === 0) {
      return this.head.val;
    } else if (idx === this.length - 1) {
      return this.tail.val;
    } else {
      let currNode = this.head;
      let count = 0;
      while (count < idx) {
        currNode = currNode.next;
        count++;
      }
      return currNode.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    let curr = this.head;
    let count = 0;
    while (count < idx) {
      curr = curr.next;
      count++;
    }
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    if (this.length === 0) return this.push(val);
    if (idx === 0) return this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.head;
    let currNode = prevNode.next;
    let count = 1;
    while (count < idx) {
      prevNode = currNode;
      currNode = currNode.next;
      count++;
    }

    newNode.next = currNode;
    prevNode.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0) {
      throw new Error("List is empty");
    }
    if (idx < 0 || idx >= this.length) {
      throw new Error("invalid index");
    }
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let prevNode = this.head;
    let currNode = prevNode.next;
    let nextNode = currNode.next;
    let count = 1;
    while (count < idx) {
      prevNode = currNode;
      currNode = prevNode.next;
      nextNode = currNode.next;
      count++;
    }
    let val = currNode.val;

    prevNode.next = nextNode;
    // currNode = null;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let curr = this.head;
    let count = 0;
    let sum = 0;
    while (count < this.length) {
      sum += curr.val;
      curr = curr.next;
      count++;
    }
    console.log(sum);
    return sum / this.length;
  }
}

// module.exports = LinkedList;
