let headerImg = document.querySelector(".header__img")
let header = document.querySelector(".header")


header.addEventListener("mousemove", (e) =>{
   // console.log(e);
   const speed = headerImg.getAttribute("data-speed")
   const X = (window.innerWidth - e.pageX * speed)/80
   const Y = (window.innerWidth - e.pageY * speed)/80
   headerImg.style.transform = `translate(${X}px, ${Y}px)`
})

let headerTitle = document.querySelector(".header__title")
let txt = headerTitle.innerHTML
headerTitle.innerHTML = ""
function str(x = 0){
   headerTitle.innerHTML += txt[x]
   x++
   if(x < txt.length){
      setTimeout(() => {
         str(x)
      },50)
   }
 
}
str()

let mainServices= document.querySelector(".main__services")
let fadeLeft = document.querySelectorAll(".fade-left")
//console.log(mainServices.offsetTop);/*926*/
//console.log(mainServices.offsetHeight);/*457*/

window.addEventListener("scroll", () => {
//console.log(this.scrollY);
fadeLeft.forEach(fadeLefts => {
   const speed = fadeLefts.getAttribute("data-speed")
   fadeLefts.style.transition = speed + "ms"
if(this.scrollY >= (mainServices.offsetTop - mainServices.offsetHeight )){
  fadeLefts.classList.add("active")
}else{
   fadeLefts.classList.remove("active")
}
 });



})

let mainDesign = document.querySelector(".main__design")
let flipRight = document.querySelector(".flip-right")
let flipLeft  = document.querySelector(".flip-left")
//console.log(mainDesign.offsetTop);/*1383*/
//console.log(mainDesign.offsetHeight);/*666*/

window.addEventListener("scroll", () =>{
   //console.log(window.scrollY)
   const speedFlipRight = flipRight.getAttribute("data-speed")
   flipRight.style.transition = speedFlipRight + "ms"
   const speedFlipLeft = flipLeft.getAttribute("data-speed")
   flipLeft.style.transition = speedFlipLeft + "ms"
   if(this.scrollY >= (mainDesign.offsetTop - mainDesign.offsetHeight)){
      flipLeft.classList.add("active")
      flipRight.classList.add("active")
    }else{
       flipLeft.classList.remove("active")
       flipRight.classList.remove("active")
    }
   
  
})

let mainTeamwork = document.querySelector(".main__teamwork")
let zoomIn = document.querySelectorAll(".zoom-in")
window.addEventListener("scroll",() =>{
  
   zoomIn.forEach(zooms => {
      const speedZoom= zooms.getAttribute("data-speed")
      zooms.style.transition = speedZoom + "ms"
      if(this.scrollY >= (mainTeamwork.offsetTop - mainTeamwork.offsetHeight)){
         zooms.classList.add("active")
       }else{
          zooms.classList.remove("active")
        
       }
   });
})

let fadeUp = document.querySelector(".fade-up")
let fadeDown = document.querySelector(".fade-down")
let mainTestimonial = document.querySelector(".main__testimonial")

window.addEventListener("scroll", () =>{
   const speedFadeUp = fadeUp.getAttribute("data-speed") 
   fadeUp.style.transition = speedFadeUp + "ms"
   const speedFadeDown = fadeDown.getAttribute("data-speed") 
   fadeDown.style.transition = speedFadeDown + "ms"
   if(this.scrollY >= (mainTestimonial.offsetTop - mainTestimonial.offsetHeight)){
      fadeUp.classList.add("active")
      fadeDown.classList.add("active")
    }else{
       fadeUp.classList.remove("active")
       fadeDown.classList.remove("active")
    }
})
let mainBrands = document.querySelector(".main__brands")
let fadeUpRight = document.querySelector(".fade-up-right")
let fadeDownRight = document.querySelector(".fade-down-right")
let fadeUpLeft = document.querySelector(".fade-up-left")
let fadeDownLeft = document.querySelector(".fade-down-left")
let zoomInDown = document.querySelector(".zoom-in-down")

window.addEventListener("scroll",() => {
const speedFadeUpRight = fadeUpRight.getAttribute("data-speed")
fadeUpRight.style.transition = speedFadeUpRight + "ms"
const speedFadeDownRight = fadeDownRight.getAttribute("data-speed")
fadeDownRight.style.transition = speedFadeDownRight + "ms"
const speedFadeUpLeft = fadeUpLeft.getAttribute("data-speed")
fadeUpLeft.style.transition = speedFadeUpLeft + "ms"
const speedZoomInDown =zoomInDown.getAttribute("data-speed")
zoomInDown.style.transition = speedZoomInDown + "ms"
const speedFadeDownleft = fadeDownLeft.getAttribute("data-speed")
fadeDownLeft.style.transition = speedFadeDownleft + "ms"
if (this.scrollY >= (mainBrands.offsetTop - mainBrands.offsetHeight * 2)){
   fadeUpRight.classList.add("active")
   fadeDownRight.classList.add("active")
   fadeUpLeft.classList.add("active")
   fadeDownLeft.classList.add("active")
   zoomInDown.classList.add("active")
   

}else{
   fadeUpRight.classList.remove("active")
   fadeDownRight.classList.remove("active")
   fadeUpLeft.classList.remove("active")
   fadeDownLeft.classList.remove("active")
   zoomInDown.classList.remove("active")
   
}
})

let headerMenu = document.querySelector(".header__menu")
let headerNavMenu = document.querySelector(".header__nav-menu")


headerMenu.addEventListener("click", function(){
   headerNavMenu.classList.toggle("active")
})
