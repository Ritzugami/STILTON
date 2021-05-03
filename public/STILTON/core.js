console.log(`loading STILTON...`)
//init STILTON vars.
const w = `1000px`
const h = `700px`
//the core script.
var script = [];
var characterList = [];
class Character {
    constructor() 
    {
    }
}

///////////////////////////////////////////////////////////CORE STILTON VARS////////////////////////////////////////////////
//sayMode controls how text is printed out into the window.
var sayMode = false;
//what line is STILTON about to read.
var line = 0
//what character ID is STILTON currently focused on.
var targetCharacter;
//the character object STILTON is currently focused on.
var currentCharacter
//rollout text speed, in milliseconds.
var rollout = 20;
//controller for text rollout: lockout clicking until text rollout complete.
var isRollouting = false;
//sound controllers


//load the script into memory.
fetch(`./STILTON/script.txt`)
    .then(async (r) => {
        var text = await r.text()
        script = text.split(`\r\n`)
        var done = false;
        var i = 0;
        while(!done)
        {
            if(script[i][0]===`#` || !script[i][0]) 
            {
                script.splice(i,1)
            }
                else i++

            if(i==script.length) done = true
        }
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
                //console.log(`>>>>>>>>>>>>exting initMode.`)
                initMode = false
                characterList.push(chara)
            }
            //once initMode is entered, parse the following lines as properties.
            if(initMode)
            {
                //console.log(`parsing as initMode...`)
                var prop = rows[i].match(/(\w+)\:/)[1]
                var val = rows[i].match(/\w+\:\s+(.*)$/)[1]
                //console.log(`prop ${prop} val ${val}`)
                chara[`${prop}`] = val
                //console.log(chara)
            }


            //search for a line with a string of characters, and then a colon after. This starts initMode, which allows STILTON to parse following lines as properties.
            if(rows[i].match(/(\w+)\:{2}/) && !initMode) 
            {
                //console.log(`starting initMode...`)
                initMode = true
                var chara = new Character()
                chara.id = rows[i].match(/(\w+)\:{2}/)[1]
                //console.log(chara)
            }


            
        }

    })


    


//perform the next action.
//this is the core parser head for STILTON, and it's called everytime the container div is clicked.
let step = async () => {
   
    //do nothing if text is currently being rolled out.
    if(isRollouting) return
    //start sayMode if the command is called.
    if(script[line].match(/\w+\:/))
    {
        sayMode = true;
        targetCharacter = script[line].match(/(\w+)\:/)[1]
        console.log(`sayMode called for ${targetCharacter}`)
        await setCurrentCharacter(targetCharacter)
        //adjust the namebox.
        nb.innerHTML = currentCharacter.name
        console.log(currentCharacter.color)
        nb.style.color = currentCharacter.color
        line++
    }

    if(sayMode)
    {
        console.log(`${targetCharacter}: ${script[line]}`)
        var tb = document.getElementById(`tb`)
        var currStr = ``
        //rollout text.
        if(rollout!==0)
        {
            isRollouting = true;
            for(var i = 0; i < script[line].length;i++)
            {
                currStr +=script[line][i]
                await new Promise((res,rej) => {
                    setTimeout(() => {
                        res()
                    },rollout)
                })
               
                tb.innerHTML=currStr

            }
            //finish rollouting.
            isRollouting = false;
        } else 
        {
            tb.innerHTML=script[line]
        }
    }

    line++;

    //moveI()
}


//init visual assets.
let init = () => {

    console.log(`initializing STILTON...`)
    var s = document.getElementById("STILTON")
    s.width = w
    s.style.borderStyle = `solid`
    s.style.borderColor = `aquamarine`
    s.style.width = w
    s.style.height = h
    s.style.position = `relative`

    //add the textbox child.
    var tb = document.createElement(`div`)
    tb.id = `tb`
    s.appendChild(tb)
    tb.style.borderStyle = `solid`
    tb.style.borderColor = `#FF0000`
    tb.style.backgroundColor = `#555555`
    tb.style.width = `973px`
    tb.style.height = `200px`
    tb.style.top = `69%`
    tb.style.left = `1%`
    tb.style.position = `absolute`
    //add the namebox child.
    var nb = document.createElement(`div`)
    nb.id = `nb`
    s.appendChild(nb)
    nb.style.borderStyle = `solid`
    nb.style.borderColor = `#FF0000`
    nb.style.backgroundColor = `#555555`
    nb.style.width = `200px`
    nb.style.height = `30px`
    nb.style.top = `64%`
    nb.style.left = `1%`
    nb.style.position = `absolute`
    nb.style.display = `flex`
    nb.style.alignItems = `center`
    nb.style.justifyContent = `center`
    //add textholder for namebox (nameboxtext, nbt)
    
    
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
    i.src = `./STILTON/img/engie.gif`
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


//sets the current character based on ID
let setCurrentCharacter = async (ID) => {
    await new Promise((res,rej) => {
        for(var i = 0; i<characterList.length;i++)
        {
            if(ID === characterList[i].id)
            {
                console.log(`current chara set to ${ID}`)
                currentCharacter = characterList[i]
            }
        }
        res()
    })

}
