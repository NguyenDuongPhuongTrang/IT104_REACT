function findLongestUniqueWord<T extends string>(sentence: T): T {
    const words = sentence.split(" ") as T[];
    
    const hasUniqueChars = (word: string) => {
        const set = new Set(word);
        return set.size === word.length;
    };

    let longestWord = "" as T;
    for (const word of words) {
        if (hasUniqueChars(word) && word.length > longestWord.length) {
            longestWord = word as T;
        }
    }
    return longestWord;
}

const sentence = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestUniqueWord(sentence)); 
