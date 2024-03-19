let inp = document.querySelector("input");
let ul = document.querySelector("ul")
let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
     if(inp.value === ""){
        alert("you must have to write the tassk to add it");
       
     }
     else{
        let li = document.createElement("li")
        li.innerText = inp.value;
        ul.appendChild(li);
        let span = document.createElement("span")
        span.innerText = "\u00d7"
       li.appendChild(span);
        
     }
     inp.value="";
})

ul.addEventListener("click", (e)=>{
    if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
    }
})

