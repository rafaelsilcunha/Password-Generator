const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
]

password1 = document.getElementById("pw-container1")
password2 = document.getElementById("pw-container2")

let pwlength = 15

function generatePw() {
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