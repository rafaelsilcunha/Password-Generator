const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
]

const lettersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]

const lettersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
]

let password1 = document.getElementById("pw-container1")
let password2 = document.getElementById("pw-container2")
const symbolsCheck = document.getElementById("sym-check")
const numbersCheck = document.getElementById("num-check")
const generateBtn = document.getElementById("generate-btn")
const copyPassword1 = document.getElementById("copy-pw1")
const copyPassword2= document.getElementById("copy-pw2")



let pwlength = 15

//Event listener to check if which checkboxes are checked and then runs a function
generateBtn.addEventListener("click", function(){
    //declare the checked states of the checkboxes inside the eventlistener
    //so they are checked everytime the button is clicked
    const includeSymbols = symbolsCheck.checked
    const includeNumbers = numbersCheck.checked
    if (includeSymbols && includeNumbers) {
        password1.textContent = ""
        password2.textContent = ""
        for (let i=0; i < pwlength; i++) {
            let randomChr1 = Math.floor(Math.random()*characters.length)
            password1.textContent += characters[randomChr1]
        }
        for (let i=0; i < pwlength; i++) {
            let randomChr2 = Math.floor(Math.random()*characters.length)
            password2.textContent += characters[randomChr2]
        }    
    } else if (includeNumbers) {
        password1.textContent = ""
        password2.textContent = ""
        for (let i=0; i < pwlength; i++) {
            let randomChr1 = Math.floor(Math.random()*lettersNumbers.length)
            password1.textContent += lettersNumbers[randomChr1]
        }
        for (let i=0; i < pwlength; i++) {
            let randomChr2 = Math.floor(Math.random()*lettersNumbers.length)
            password2.textContent += lettersNumbers[randomChr2]
        }    
    } else if (includeSymbols) {
        password1.textContent = ""
        password2.textContent = ""
        for (let i=0; i < pwlength; i++) {
            let randomChr1 = Math.floor(Math.random()*lettersSymbols.length)
            password1.textContent += lettersSymbols[randomChr1]
        }
        for (let i=0; i < pwlength; i++) {
            let randomChr2 = Math.floor(Math.random()*lettersSymbols.length)
            password2.textContent += lettersSymbols[randomChr2]
        }    
    } else {
        password1.textContent = ""
        password2.textContent = ""
        for (let i=0; i < pwlength; i++) {
            let randomChr1 = Math.floor(Math.random()*characters.length)
            password1.textContent += characters[randomChr1]
        }
        for (let i=0; i < pwlength; i++) {
            let randomChr2 = Math.floor(Math.random()*characters.length)
            password2.textContent += characters[randomChr2]
        }    
    }
})

copyPassword1.addEventListener("click", function() {
    navigator.clipboard.writeText(password1.textContent)
})

copyPassword2.addEventListener("click", function() {
    navigator.clipboard.writeText(password2.textContent)
})

