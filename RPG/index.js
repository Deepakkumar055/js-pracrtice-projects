let inp = document.querySelector("input");
let copy = document.querySelector(".cpy");
let btn = document.querySelector(".btn")
const length = 12; 
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+|}{?/\|-=<>";

let allChar = `${upperCase}${lowerCase}${number}${symbol}`;



btn.addEventListener("click", ()=>{
   let password = ""
   password += upperCase[Math.floor(Math.random() * upperCase.length)];
   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
   password += number[Math.floor(Math.random() * number.length)];
   password += symbol[Math.floor(Math.random() * symbol.length)];
   

     while(length>password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
     }

     inp.value = password;
})

copy.addEventListener("click", ()=>{
   if(inp.value == ""){
      alert("generate the password to copy it");
   }
   else{
      inp.select();
      document.execCommand("copy");

   }
  
})
