const password = "Faisal@2328";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const speacialchar = '!@#$%^&*()_+=-`';
const numbers = '1234567890';


if (password.length < 8) {
 console.log("password length should be greater than 8")
}

let passwordConsistChar = false;
let passwordConsistNumber = false;
let passwordConsistSpChar = false;


Array.from(password).forEach(p => {
    console.log(characters.indexOf(p));

    if (characters.indexOf(p) > 0){
        passwordConsistChar = true;
    } else if (speacialchar.indexOf(p) > 0){
        passwordConsistSpChar = true;
    } else if (numbers.indexOf(p) > 0){
        passwordConsistNumber = true;
    }
});


if (passwordConsistChar && passwordConsistNumber && passwordConsistSpChar) {
    console.log('Password is strong');
} else {
    console.log('Enter strong password');
}

console.log({passwordConsistChar, passwordConsistSpChar, passwordConsistNumber});