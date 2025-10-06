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
const length_el = document.getElementById('len')
const copy1 = document.getElementById('cpy1')
const copy2 = document.getElementById('cpy2')
generate_btn.addEventListener('click',function(){
    
    pass1.textContent = getRandomPass()
    pass2.textContent = getRandomPass()
})
function getRandomChar(){
    return charArray[Math.floor(Math.random()*charArray.length)]
}
function getRandomPass(){
    const length = parseInt(length_el.value,10)
    let arr = ""
    for(let i = 0;i<length;i++){
        arr += getRandomChar()
    }
    return arr
}
// function generateStrongPassword() {
//     const length = parseInt(length_el.textContent, 10);
//     let passwordArray = [];

//     // 1. Add one of each required character type
//     passwordArray.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]);
//     passwordArray.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
//     passwordArray.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
//     passwordArray.push(specialChars[Math.floor(Math.random() * specialChars.length)]);

//     // 2. Fill the rest of the password with random characters
//     for (let i = passwordArray.length; i < length; i++) {
//         passwordArray.push(getRandomChar());
//     }

//     // 3. Shuffle the array to randomize the order of characters
//     for (let i = passwordArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         // Swap elements
//         [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
//     }

//     return passwordArray.join('');
// }

// In your event listener, you would call this new function:
// pass1.textContent = generateStrongPassword();
copy1.addEventListener('click',async function(){
    await navigator.clipboard.writeText(pass1.textContent);
    alert('Text copied to clipboard!');
})
copy2.addEventListener('click',async function(){
    await navigator.clipboard.writeText(pass2.textContent);
    alert('Text copied to clipboard!');
})