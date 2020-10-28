const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Matheus!")
})

app.get('/msg', function(req,res){
    res.send("Essa menssagem é automática.")
})

app.get('/sobre', function(req,res){
    res.send("Essa página está sendo desenvolvida.")
})

app.get('/layout', function(req,res){
    res.send("Esse é o novo layout.")
})

app.listen(3000, function(){
    console.log("Conexão inicializada")
})

