function countWords(sentence) {
    let count = 0;
    let inWord = false;
  
    for (let i = 0; i < sentence.length; i++) {
      // Check if the character is a space or not
      if (sentence[i] === ' ' || sentence[i] === '\t' || sentence[i] === '\n') {
        inWord = false; 
      } else if (!inWord) {
        count++;
        inWord = true;
      }
    }
    
    return count;
}
  
  // Example usage:
console.log(countWords("hello world")); // Output: 2
console.log(countWords("this is the best day")); // Output: 5
console.log(countWords("a bb ccc ddddddd e")); // Output: 5
  