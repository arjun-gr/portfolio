let buttonHam = document.getElementById("hamburger")
let hamnav = document.querySelector(".hamnav")

buttonHam.addEventListener("click",()=>{
    hamnav.classList.toggle("hidden")
    console.log("clicked")
})