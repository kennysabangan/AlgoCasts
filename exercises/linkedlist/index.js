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
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);
        // Handles edge case in which index is negative
        if (!previous) {
            return;
        }

        // Handles edge case in which we are getting an index out of bounds by +1
        if (!previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        let node = new Node(data);

        // Adding to an empty list
        if (!this.head) {
            this.head = node;
            return;
        }

        // Inserting at index 0
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        let previous = this.getAt(index - 1);
        // Adding with index out of bounds
        if (!previous) {
            this.insertLast(data);
            return;
        }

        // Inserting to end of list
        if (!previous.next) {
            this.insertLast(data);
            return;
        }

        // Inserting in the middle of list
        node.next = previous.next;
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
