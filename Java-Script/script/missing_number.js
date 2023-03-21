/*function sumArray(array) {
    const ourArray = [1, 2, 3, 4, 5];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log(sumArray([1,2, 3, 4, 5]));

// second function 
  function sumArr(array) {
    const ourArr = [1, 2, 3, 5];
    let sum = 0;
  
    for (let i = 0; i < ourArr.length; i += 1) {
      sum += ourArr[i];
    }
    
    return sum;
  }
  
  console.log(sumArr([1,2, 3, 5]));


  let missingNumber;
console.log(missingNumber = sumArray([1, 2, 3, 4, 5]) - sumArr([1, 2, 3, 5])); */


function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;

    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }h
    const missingNumber = sum - arrSum;

    return missingNumber;
}

const input = [1, 2, 3, 5];
const missingNumber = findMissingNumber(input);
console.log("Missing number is:", missingNumber);
