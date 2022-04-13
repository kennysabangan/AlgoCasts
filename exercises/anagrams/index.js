// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let charsA = {}, charsB = {}
//     const splitStringA = stringA.match(/[\w]/g).join('').toLowerCase();
//     const splitStringB = stringB.match(/[\w]/g).join('').toLowerCase();

//     if (splitStringA.length != splitStringB.length) {
//         console.log('this triggered');
//         return false;
//     }

//     for (const char of splitStringA) {
//         if (!charsA[char]) {
//             charsA[char] = 1
//         } else {
//             charsA[char] += 1
//         }
//     }

//     for (const char of splitStringB) {
//         if (!charsB[char]) {
//             charsB[char] = 1
//         } else {
//             charsB[char] += 1
//         }
//     }

//     for (const key of Object.keys(charsA)) {
//         // console.log('charsA:', key, charsA[key], '| charsB:', key, charsB[key]);
//         if (charsA[key] != charsB[key]) {
//             return false;
//         }
//     }
//     return true;
// }

function anagrams(stringA, stringB) {
    const hashA = buildCharMap(stringA);
    const hashB = buildCharMap(stringB);

    if (Object.keys(hashA).length != Object.keys(hashB).length) return false;

    for (const char in hashA) {
        if (hashA[char] != hashB[char]) return false;
    }
    return true
}

function buildCharMap(str) {
    hash = {}
    for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
        hash[char] = hash[char] + 1 | 1
    }
    return hash
}

// function anagrams(stringA, stringB) {
//     const strA = stringA.match(/\w/g).sort().join('').toLowerCase();
//     const strB = stringB.match(/\w/g).sort().join('').toLowerCase();
//     return strA === strB;
// }

// anagrams('rail safety', 'fairy tales');
anagrams("A tree, a life, a bench", "A tree, a fence, a yard");

module.exports = anagrams;
