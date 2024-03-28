const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDidplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppwercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn =document.querySelector(".generateBtn");
const allCheckBox = document.querySelector("input[type=checkbox]");
const symbols = '!@##$%^^&&**()""?|\{}:"'

let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();

//set password length

function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function handleSlider(color)
{indicator.style.background =color;

}
function getRandomInteger ( min , max){
     return Math.floor(math.Random()  * ( max - min)) +min;
}

function generateRandomNumber(){
    return getRandomInteger(0,9);

}

function generateLowercase() {
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUppercase() {
    return String.fromCharCode(getRandomInteger(65,90));
}

function generateSymbol(){
    const randNum = getRandomInteger ( 0 , Symbol.length);
    return Symbol.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false ;
    let hasNum  = false;
    let hasSym = false;
    if (uppwercaseCheck.ariaChecked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbercaseCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum  ||  hasSym) && passwordlength >=8){

    setIndicator ("#0f0")
    }else if (
        (hasLower ||hasUpper) && (hasNum || hasSym ) && passwordlength >=6
    ){ 

        setIndicator("#ff0");
    }else {
        setIndicator("#f00");
    }

}

async function copyContent (){
    try{

      await  navigator.clipboard.writeText (passwordDidplay.value);
      copyMsg.innerText ="copied";
      }

      catch(e){

        copyMsg.innerText ="faield";

      }
      copyMsg.classList.remove("active");
    
      setTimeout(()=>copyMsg.classList.remove('active'),2000);

      function shufflePassword(shufflePassword){


}

function handleCheckboxChange(){
    checkCount = 1;
    allCheckBox.forEach((checkbox) => {
        if (!checkbox.checked)
        checkCount++;
    });
    }
}


      if (passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
      }

function handleCheckBoxChange(){
    checkCount = 1;

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
    
});

 inputSlider.addEventListener('input',(e)=>{
    passwordlength = e.target.value;
    handleSlider();

 })
 copyBtn.addEventListener('click', () =>{
    if (passwordDidplay.value)
    copyContent();
 })

 generateBtn.addEventListener('cick',()=>{
    if (checkCount<=0) return;
    (passwordLength<checkCount); {
        passwordLength=checkCount;
        handleSlider();
      }
      console.log("starting the journey");
password =""; 

// if (uppwercaseCheck.checked){
//    password= generateUppercase();

// }
// if (lowerercaseCheck.checked){
//     password= generateLowercase();
    
//  }
//  if (numbersCheck.checked){
//     password= generatenumbers();
    
//  }
//  if (symbolsCheck.checked){
//    password= generatesymbols();
   
//}


let funArr =[];


if( uppwercaseCheck.checked)
funArr.push(generateUppercase);


if( lowercaseCheck.checked)
funArr.push(generateLowercase);



if( symbolsCheck.checked)
funArr.push(generateSymbol);


if( numbersCheck.checked)
funArr.push(generateRandomNumber);



//compulusory edition 
for (let i=0; i<funArr.length; i++){
    password+= funArr[i]();

}  
console.log("compleassary edition done");

for (let i=0; i<passwordLength-funArr.length; i++){
    let randIndex =getRandomInteger(0 , funcArr.length);
    password += funcArr[randIndex]();

}
console.log("remaning edition done");



//sufffle the pass
password =sufflePassword(Array.password);

console.log("shuffling done");
//shoe in ui
passwordDidplay.value  = password;
//calculate strength
console.log("ui edition done");


calcStrength();

 });

}