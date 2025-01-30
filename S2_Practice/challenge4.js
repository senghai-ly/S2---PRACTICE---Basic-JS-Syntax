function countCharacterOccurrences(text, char) {
    let count = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < text.length; i++) {
      if (text[i] === char) {
        count++;
      }
    }
    
    return count;
}
  
  // Example 
console.log(countCharacterOccurrences("hello world", 'o')); // Output: 2
console.log(countCharacterOccurrences("aaa bbb a", 'a')); // Output: 4
console.log(countCharacterOccurrences("abc", 'd')); // Output: 0
  