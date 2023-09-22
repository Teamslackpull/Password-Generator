
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j"
    ,"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
    "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

const outcome1EL = document.getElementById("Surprise1")
const outcome2EL = document.getElementById("Surprise2")

const ItemCap = 15

function generate() {
    outcome1EL.textContent = " "
    outcome2EL.textContent = " "
   let RandomCharacter = " "
    for(let i = 0; i < ItemCap; i++){
        const RandomIndex = Math.floor(Math.random()* characters.length);
        RandomCharacter += characters[RandomIndex]
     }
    outcome1EL.textContent += RandomCharacter
    outcome2EL.textContent += RandomCharacter
 }




