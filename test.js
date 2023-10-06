function longestWordWithMostVowels(sentence) {
    // Remove non-alphabetic characters and split into words
    let words = sentence.replace(/[^a-z\s]/gi, '').split(' ');

    let longestWord = '';
    let maxVowels = 0;

    // Iterate over the words
    for (let word of words) {
        let vowelCount = word.match(/[aeiou]/gi);
        vowelCount = vowelCount ? vowelCount.length : 0;

        // If the word is longer or has the same length but more vowels, update longestWord
        if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowels)) {
            longestWord = word;
            maxVowels = vowelCount;
        }
    }

    return longestWord;
}

console.log(longestWordWithMostVowels('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers'));