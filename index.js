const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Matheus.")
})

app.listen(3000, function(){
    console.log("Conexão iniciada na prota 3000")
})

