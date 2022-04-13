// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let step = ''

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 step += '#';
//             } else {
//                 step += ' ';
//             }
//         }

//         console.log(step);
//     }
// }

function steps(n, row = 0, step='') {
    // Reach the end of the steps, stop
    if (row === n) {
        return;
    }

    // Reach end of the row, console.log + move to next row
    if (step.length === n) {
        console.log(step);
        return steps(n, row + 1)
    }

    // Build step
    if (step.length <= row) {
        step += '#';
    } else {
        step += ' ';
    }
    steps(n, row, step);
}

//         for (let hash = 0; hash < row; hash++) {
//             step += '#'
//         }

//         for (let space = 0; space < n - row; space++) {
//             step += ' '
//         }
//         console.log(step);
//     }
// }

//   v- Column
// [ #    ] n = 3, row = 1
// [ # #  ] n = 3, row = 2

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let step = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 step += '#'
//             } else {
//                 step += ' ';
//             }
//         }

//         console.log(step);
//     }
// }

function steps(n, row = 0, step = '') {
    // Reach the bottom of the steps, we are done
    if (row === n) {
        return;
    }

    // If at the end of the step, proceed to next step
    if (step.length === n) {
        console.log(step);
        return steps(n, row + 1)
    }

    // Else, build the step
    if (step.length <= row) {
        step += "#";
    } else {
        step += " ";
    }
    steps(n, row, step);
}

steps(4);
module.exports = steps;
