// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative Solution
// function fib(n) {
//     const fib = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i-2] + fib[i-1];
//     }

//     return fib[n];
// }

// Recursive Solution
// function fib(n) {
//     if (n <= 1) return n;

//     return fib(n - 1) + fib(n - 2);
// }

// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//         if (cache[args]) {
//             return cache[args];
//         }

//         const result = fn.apply(this, args);
//         cache[args] = result;
//         return result;
//     }
// }

// fib = memoize(fib);


// Do it again! Recursion + Memoization
function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 2) + fib(n - 1);
}

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args] // fib[3] = 2 ? return 2;
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

fib = memoize(fib);

module.exports = fib;
