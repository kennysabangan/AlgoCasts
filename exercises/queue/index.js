// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     add(val) {
//         this.queue.unshift(val);
//     }

//     remove() {
//         return this.queue.pop();
//     }
// }

class Queue {
    constructor() {
        this.head = null;
    }

    add(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            return this;
        }

        node.next = this.head;
        this.head = node;
        return this;
    }

    remove() {
        var runner = this.head;
        var follower = null;

        if (!this.head.next) {
            const removed = this.head.val;
            this.head.val = undefined;
            return removed;
        }

        while (runner.next != null) {
            follower = runner;
            runner = runner.next;
        }

        follower.next = null;
        return runner.val;
    }

    display() {
        var runner = this.head;
        var display = "List: ";
        while (runner != null) {
            display += runner.val + ' ';
            runner = runner.next;
        }
        console.log(display);
        return display;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const q = new Queue();
q.add(1).add(2).add(3)
q.display();

module.exports = Queue;
