// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// Done with a reversed array
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// function reverse(str) {
//     let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }

function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, char) => (
        char + reversed
    ), '')
}

module.exports = reverse;
