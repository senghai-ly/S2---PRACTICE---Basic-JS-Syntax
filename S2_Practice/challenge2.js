function reverseArray(arr) {
    let reversedArray = [];
    
    // Loop through the original array from the last element to the first
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    
    return reversedArray;
}
console.log(reverseArray([14, 15, 16, 20]));
console.log(reverseArray([5,4,3,2,1]));
console.log(reverseArray([]));  