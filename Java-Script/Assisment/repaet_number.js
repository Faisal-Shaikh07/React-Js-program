let arr=[2, 4, 5, 5, 4, 6];
let result=[];
for (let value of arr){
    if(!result.includes(value)){
        result.push(value);
    }
    else{
        let value_index = result.indexOf(value);
        result.splice(value_index);
    }
   
}
console.log(result);




// let arr = [5, 2, 4, 6, 1, 3];

// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }

// console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

