function drawRectangle(width, height) {
    let rectangleString = '';
    
    if (height <= 0) {
      return rectangleString; 
    }
  
    for (let i = 0; i < height; i++) {
      let row = '';
      for (let j = 0; j < width; j++) {
        row += '*';
      }
      rectangleString += row + '\n';
    }
  
    return rectangleString;
}

console.log(drawRectangle(3, 4));
console.log("======================");
console.log(drawRectangle(5, 2));
console.log("======================");
console.log(drawRectangle(5, -2));
console.log("======================");


