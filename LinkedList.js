/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 11/7/12
 * Time: 2:48 PM
 * To change this template use File | Settings | File Templates.
 */

var NIKLL = NIKLL || {};

NIKLL.LinkedList = function() {
    this.size = 0;
}

NIKLL.LinkedList.prototype.addElement = function(key, value) {
    var node = new NIKLL.ListNode(key, value);
    if(this.head === undefined) {
        this.head = node;
    }

    if(this.tail === undefined) {
        this.tail = node;
    }
    else {
        this.tail.next = node;
        this.tail = node;
    }
    this.size += 1;
    return this;
}

NIKLL.LinkedList.prototype.removeEldestElement = function() {
    var removedKey = null;
    if(!(this.head == null)) {
        var eldestEntry = this.head;
        this.head = this.head.next;
        removedKey = eldestEntry.key;
        eldestEntry = null;
        this.size -= 1;
    }
    return removedKey;
}

NIKLL.LinkedList.prototype.getSize = function() {
    return this.size;
}

NIKLL.LinkedList.prototype.traverseElements = function(callback) {
    var tempNode = this.head;

    while(tempNode) {
        callback(tempNode.key, tempNode.value);
        tempNode = tempNode.next;
    }
}
