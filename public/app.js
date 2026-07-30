let image = document.querySelector(".image")
let uname = document.querySelector(".uname")
let ucomment = document.querySelector(".ucomment")
let cimage = document.querySelector(".textimonial-col img")
let cardname = document.querySelector(".textimonial-col .card h3")
let cardcomment = document.querySelector(".textimonial-col .card p")
let sbtn = document.querySelector(".sbtn")

sbtn.addEventListener("click",function(){
   cimage.src = image.value;
   cardname.innerHTML = uname.value;
   cardcomment.textContent = ucomment.value;
   console.log(cardcomment.textContent)
    
})