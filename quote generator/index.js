let quote = document.querySelector("blockquote");
let autor = document.querySelector("span");

let genBtn = document.querySelector(".btn1");
let tweetBtn = document.querySelector(".btn2");

let url = "https://api.quotable.io/random";

async function quoteGenerator(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    quote.innerText = data.content;
    autor.innerText = data.author;

  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}
quoteGenerator(url);

genBtn.addEventListener("click", () => {
  quoteGenerator(url);
});

tweetBtn.addEventListener("click", ()=>{
    window.open( href="https://twitter.com/intent/tweet?text="+ quote.innerText + " By --" + autor.innerText, "Tweet Window", "width = 600, height= 600")
})


