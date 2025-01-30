function calculateAverage(grades) {
    // Check if the array is empty
    if (grades.length === 0) {
      return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    
    return sum / grades.length;
}
  
// Example
console.log(calculateAverage([85, 90, 78, 92])); 
console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([])); 
