"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findLongestUniqueWord(sentence) {
    const words = sentence.split(" ");
    const hasUniqueChars = (word) => {
        const set = new Set(word);
        return set.size === word.length;
    };
    let longestWord = "";
    for (const word of words) {
        if (hasUniqueChars(word) && word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const sentence = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestUniqueWord(sentence));
