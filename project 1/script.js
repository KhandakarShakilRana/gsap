let h1 = document.querySelector("h1")

function animateText(text){

    let splitedText = text.split("")
    let clutter = ""
    let halfOf = Math.floor(splitedText.length / 2)

    splitedText.forEach((element,id)=>{
        if(element === " ") element = "&nbsp;"
        if(id < halfOf){
            clutter += `<span class="a">${element}</span>`
        }else{
            clutter += `<span class="b">${element}</span>`
        }
    })

    h1.innerHTML = clutter

    gsap.from("h1 .a",{
        y:50,
        opacity:0,
        duration:0.6,
        stagger:0.15,
        
    })

    gsap.from("h1 .b",{
        y:50,
        opacity:0,
        duration:0.6,
        stagger:-0.15
    })
}

animateText(h1.textContent)

document.querySelector("button").addEventListener("click",()=>{
    let input = document.querySelector("input").value
    adjustFont(input)
    animateText(input)

})

function adjustFont(text){
    let size = 10 - text.length * 0.4
    if(size < 3) size = 3
    h1.style.fontSize = size + "vw"
}