const btnEncript = document.querySelector('.btn');
const btnDecript = document.querySelector('.decript');
const elForm = document.querySelector('.js-form');
const Key = document.querySelector('.js-input-key');
const elResult = document.querySelector('.result');
const elResult_end = document.querySelector('.result-end')
const elCopyBtn = document.querySelector('.btncopy');
const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let newText = '';

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const textarea = document.querySelector('.js-input-text');
    const Keyvalue = Number(Key.value)
    for (const letter of textarea.value) {
        if(!listLetters.includes(letter)){
            continue;
        }
        const indexletter = listLetters.findIndex((item) => item === letter);
        
        let newIndexletter = indexletter + Keyvalue;

        if(newIndexletter>25){
            newIndexletter -=26;
        }
        newText +=listLetters[newIndexletter];
        elResult.textContent = newText;  
    }
})


let newTextEnd = '';

btnDecript.addEventListener("click", (evt) => {
     newText ='';

    evt.preventDefault();
    const Keyvalue = Number(Key.value)
    for (let letterEnd of elResult.textContent ) {
        letterEnd = letterEnd.toLowerCase();
        if(!listLetters.includes(letterEnd)){
            continue;
        }
        const indexletterEnd = listLetters.findIndex((item) => item === letterEnd);
        
        let newIndexletterEnd = indexletterEnd - Keyvalue;

        if(newIndexletterEnd < 0){
            newIndexletterEnd +=26;
        }
        newTextEnd +=listLetters[newIndexletterEnd];
        elResult_end.textContent = newTextEnd;
    }
    newTextEnd ='';
})
const elCopy = document.querySelector(".copy");
elCopyBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    navigator.clipboard.writeText(elResult.textContent);
    elCopy.style.display = 'flex';
})
