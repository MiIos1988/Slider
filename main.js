const btnLeft = document.querySelector(".left")
const btnRight = document.querySelector(".right")
const mainImg = document.querySelector(".slider")
const allImg = document.querySelectorAll(".box > img")
const container = document.querySelector(".container")
const arrow = document.querySelector(".arrow")


let counter = 1

btnRight.addEventListener("click", ()=>{
    counter++
    if(counter>allImg.length){
        counter=1
    }
mainImg.setAttribute("src", `img/img${counter}.jpg`)
allImg.forEach(img=>img.classList.remove("border"))
allImg[counter-1].classList.add("border")

}) 

btnLeft.addEventListener("click", ()=>{
    counter--
    if(counter===0){
        counter=allImg.length
    }
mainImg.setAttribute("src", `img/img${counter}.jpg`)
allImg.forEach(img=>img.classList.remove("border"))
allImg[counter-1].classList.add("border")

}) 


    

