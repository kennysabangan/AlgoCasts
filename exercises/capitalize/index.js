// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return result;
}

// function capitalize(str) {
//     let words = [];
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase + word.slice(1));
//     }
//     return words.join(' ');
// }

capitalize('a short sentence')
module.exports = capitalize;
