let inp = document.querySelector("input");
let form = document.querySelector("#search");
let loadMore = document.querySelector(".searchResult");
let loadBtn = document.querySelector("#shownMore");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = inp.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=Lzp8u_J8n3yMzP7ei8U6eO18DK7Ix0EcmHDCjf8jSZ4&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();


  if(page===1){
    loadMore.innerHTML = "";
  }
 const results  = data.results;
   results.map((result)=>{
    const image = document.createElement("img")
    image.src = result.urls.small;
    const imageLink = document.createElement("a")
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    loadMore.appendChild(imageLink )
    

   })
   loadBtn.style.display = "block"

}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

loadBtn.addEventListener("click", ()=>{
  page++;
  searchImage();
})
