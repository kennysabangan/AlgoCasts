// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let hash = {}
    for (const char of str) {
        if (!hash[char]) {
            hash[char] = 1;
        } else {
            hash[char] += 1;
        }
    }

    return Object.keys(hash).reduce((a, b) => hash[a] > hash[b] ? a : b)
}

module.exports = maxChar;
