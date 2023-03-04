const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Helloiii World')
})

app.get('/about', function (req, res) {
    res.sendFile("./views/about.html",{root:__dirname})
  })

app.get('/aboutus',(req,res) =>{
    res.redirect('/about')
})

app.use((req, res) =>{
    let ans = res.status(404);
    console.log(res);
    res.sendFile("./views/404.html",{root:__dirname})
  })


app.listen(4000,() => {
    console.log("server is listening to 3000");
})