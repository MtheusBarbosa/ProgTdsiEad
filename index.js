const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Matheus!")
})

app.get('/mensagem', function(req,res){
    res.send("Essa menssagem é automática.")
})

app.listen(3000, function(){
    console.log("Conexão inicializada")
})

