function generatePassword(){
    let number = '0123456789';
    let password='';
    for(let i=0; i < 6; i++){
        password += number[Math.floor(Math.random() * 10)];
        
    }
    console.log (password);
}

generatePassword()











// function generatePassword(length) {
//     var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     var password = "";
//     for (var i = 0; i < length; i++) {
//       var randomIndex = Math.floor(Math.random() * charset.length);
//       password += charset.charAt(randomIndex);
//     }
//     return password;
//   }
  
//   console.log(generatePassword(6));



// const length = 8;

// const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

// let password = "";

// for (let i = 0; i < length; i++) {
//   const randomIndex = Math.floor(Math.random() * chars.length);
//   password += chars[randomIndex];
// }

// console.log(password);

  