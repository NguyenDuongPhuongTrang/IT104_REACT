const findLongestUniqueWord = (sentence: string): string => {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    const chars = new Set(word);
    if (chars.size === word.length && word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

const sentence = "hello world apple banana orange pumpkin cucumber";
console.log(findLongestUniqueWord(sentence)); 
