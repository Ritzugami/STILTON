const express = require(`express`)
const app = express()

//let express use STILTON as a source.
const srcDir = `${__dirname}\\public`
console.log(srcDir)
app.use(express.static(srcDir))

//set runtime type.
const rtType = `l`



if(rtType===`l`)
{
  const server = app.listen(3030, () => {
      const host = `192.168.1.146`
      const port = server.address().port;
    
      console.log(`app listening at http://localhost:${port}`);
    });
}

/*
app.get(`/`, (req,res) => {
    res.sendFile(__dirname+`/public/p.html`)
})
*/


