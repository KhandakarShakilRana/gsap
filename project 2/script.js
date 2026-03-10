let menu = document.querySelector("#nav i")
let cross = document.querySelector("#full i")

console.log(cross);

let tl = gsap.timeline()
tl.to("#full",{
    right:0,
    duration:0.8,
})
tl.from("#full h4",{
    opacity:0,
    x:150,
    duration:1,
    stagger:0.3
    
})
tl.from("#full i",{
    opacity:0,
})
tl.pause()

menu.addEventListener("click",()=>{
    menu.style.display = "none"
    tl.play()

})
cross.addEventListener("click",()=>{
    tl.reverse()
    menu.style.display = "block"
})
