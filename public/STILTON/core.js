console.log(`loading STILTON...`)
//init STILTON vars.
const w = `1000px`
const h = `700px`

class Character {
    constructor(name,id,color) 
    {
        this.name = name
        this.id = id
        this.color = color
    }
}
    
console.log(`initing charas...`)
var det = new Character(`Antonia`,`det`,`#005500`)


//perform the next action.
let step = () => {
    console.log(`steppin.`)
    moveI()
}



let init = () => {

    console.log(`initializing STILTON...`)
    var s = document.getElementById("STILTON")
    s.width = w
    s.style.borderStyle = `solid`
    s.style.borderColor = `aquamarine`
    s.style.width = w
    s.style.height = h
    s.innerHTML = `sfsdf`
    s.style.position = `relative`

    console.log(`...init done.`)
    //init characters.

}




let dispCharacters = () => {
    console.log(det)
}


let drawI = (c) => {
    var s = document.getElementById("STILTON")
    var i = document.createElement(`img`)
    console.log(`drawing engie`)
    i.src = `engie.gif`
    i.style.width = `100px`
    i.id = `eng`
    i.style.position = `absolute`
    i.style.top = `111px`
    i.style.left = `111px`
    
    s.appendChild(i)
}

let moveI = () => {
    console.log(`moving engie...`)
    var i = document.getElementById("eng")
    i.style.transition = `.2s`
    var pos = i.style.left
    console.log(pos)
    var x = Math.floor(Math.random()*1000)
    var y = Math.floor(Math.random()*700)

    i.style.left = `${x}px`
    i.style.top = `${y}px`
}
setTimeout(() => {
    //init stilton.
    init()
},100)


