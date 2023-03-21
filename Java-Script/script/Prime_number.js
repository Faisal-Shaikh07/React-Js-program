let arr = [8, 9, 11, 13, 17];
let Prime = true;
for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
            Prime = false;
            break;
        }
    }
    if (Prime && arr[i] > 1) {
        console.log(arr[i]);
      }
    }