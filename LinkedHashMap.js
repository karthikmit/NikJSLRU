/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 11/7/12
 * Time: 3:26 PM
 * To change this template use File | Settings | File Templates.
 */

var NIKLL = NIKLL || {};

NIKLL.LinkedHashMapLRU = function(maxSize) {
    this.hashMap = {};
    this.internallist = new NIKLL.LinkedList();
    this.limit = maxSize;
}

NIKLL.LinkedHashMapLRU.prototype.put = function(key, value) {
    if(this.hashMap[key] == null) {
        if(this.internallist.getSize() > this.limit) {
            // Purge eldest element and go ahead ..
            var eldestKey = this.internallist.removeEldestElement();
            this.hashMap[eldestKey] = null;
            delete this.hashMap[eldestKey];
        }
        this.hashMap[key] = value;
        this.internallist.addElement(key, value);
    }
}

NIKLL.LinkedHashMapLRU.prototype.get = function(key) {
    return this.hashMap[key];
}
