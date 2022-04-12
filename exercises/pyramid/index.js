// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       ---> 2n - 1
//   |    '  #  '   row 0: 1 #
//  n|    ' ### '   row 1: 3 #
//   v    '#####'   row 2: 5 #

function pyramid(n) {
    const mid = Math.floor((2*n-1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2*n-1; column++) {
            if (mid - row <= column && column <= mid + row) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

module.exports = pyramid;
