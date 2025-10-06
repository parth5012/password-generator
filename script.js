// Define the character sets as strings
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_{|}~';

// Combine all characters into a single string
const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;

// Convert the combined string into an array of characters
const charArray = allChars.split('');

// // Or, if you prefer to keep them separate for logic (e.g., "must contain a number")
// const lowercaseArray = lowercaseChars.split('');
// const uppercaseArray = uppercaseChars.split('');
// const numberArray = numberChars.split('');
// const specialArray = specialChars.split('');

// // You can combine the arrays like this
// const combinedArray = [
//     ...lowercaseArray, 
//     ...uppercaseArray, 
//     ...numberArray, 
//     ...specialArray
// ];


// // Now you can use 'combinedArray' or 'charArray' to pick random characters
// // console.log(combinedArray);
const generate_btn = document.getElementById('btn')
const pass1 = document.getElementById('first')
const pass2 = document.getElementById('second')
const length = 15

generate_btn.addEventListener('click',function(){
   pass1.textContent = getRandomPass()
   pass2.textContent = getRandomPass()
})
function getRandomChar(len){
    return charArray[Math.floor(Math.random()*charArray.length)]
}
function getRandomPass(){
    let arr = ""
    for(let i = 0;i<15;i++){
        arr += getRandomChar(length)
    }
    return arr
}