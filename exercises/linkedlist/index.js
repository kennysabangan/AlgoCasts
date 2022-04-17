// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        return this;
    }

    size() {
        let length = 0;
        let node = this.head;
        while (node != null) {
            length++;
            node = node.next;
        }
        return length;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        let node = this.head;
        let previous = null;

        // Case: Length of 0
        if (!this.head) {
            return;
        }

        // Case: Length of 1
        if (!this.head.next) {
            this.head = null;
            return;
        }

        // Case: Length of 2+
        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
        return
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let idx = 0;
        let node = this.head;
        while (node) {
            if (idx === index) {
                return node;
            }

            idx++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        if (index === 0) {
            this.removeFirst();
        }

        if (this.size() - 1 === index) {
            this.removeLast();
        }

        if (index > this.size() - 1) {
            return;
        }

        let node = this.getAt(index - 1);
        if (node.next) {

        }
    }
}

module.exports = { Node, LinkedList };
