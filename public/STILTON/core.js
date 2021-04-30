console.log(`loading STILTON...`)
//init STILTON vars.
const w = `1000px`
const h = `700px`
var script = ``;
var characterList = [];

class Character {
    constructor() 
    {

    }
}

//load the script into memory.
fetch(`./STILTON/script.txt`)
    .then(async (r) => {
        script = await r.text()
    })
//load the characters into memory.
fetch(`./STILTON/characters.txt`)
    .then(async (r2) => {
        characters = await r2.text()
        var rows = characters.split('\r\n')
        //parse out all lines that start with a #

        var done = false;
        var i = 0;
        while(!done)
        {
            if(rows[i][0]===`#` || !rows[i][0]) 
            {
                rows.splice(i,1)
            }
                else i++

            if(i==rows.length) done = true
        }

        //step through the resulting text, line by line.
        //initMode is a state in which STILTON is parsing lines as character properties. See below.
        var initMode = false;
        for(var i = 0; i<rows.length;i++)
        {
            
            if(rows[i].match(/^\:{2}/))
            {
                console.log(`>>>>>>>>>>>>exting initMode.`)
                initMode = false
                characterList.push(chara)
            }
            //once initMode is entered, parse the following lines as properties.
            if(initMode)
            {
                console.log(`parsing as initMode...`)
                var prop = rows[i].match(/(\w+)\:/)[1]
                var val = rows[i].match(/\w+\:\s+(.*)$/)[1]
                console.log(`prop ${prop} val ${val}`)
                chara[`${prop}`] = val
                console.log(chara)
            }


            //search for a line with a string of characters, and then a colon after. This starts initMode, which allows STILTON to parse following lines as properties.
            if(rows[i].match(/(\w+)\:{2}/) && !initMode) 
            {
                console.log(`starting initMode...`)
                initMode = true
                var chara = new Character()
                chara.id = rows[i].match(/(\w+)\:{2}/)[1]
                console.log(chara)
            }


            
        }

    })


    
console.log(`initing charas...`)
var det = new Character(`Antonia`,`det`,`#005500`)


//perform the next action.
//this is the core parser head for STILTON, and it's called everytime the container div is clicked.
let step = async () => {
    console.log(`steppin.`)

    //moveI()
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


