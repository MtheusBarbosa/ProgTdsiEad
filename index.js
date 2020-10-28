const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get('/', function(req,res){
    res.render('index.ejs',{})
})

app.get('/usuarios', function(req,res){
    res.render('usuarios.ejs',{ usuarios:[
        {nome:'Matheus', email:'afsfe@gmail.com'},
        {nome:'Zezinho', email:'zezinho@gmail.com'},
        {nome:'Braulio', email:'braulio@gmail.com'},
        {nome:'Juju', email:'jujuo@gmail.com'}
    ] })
})

app.listen(3000, function(){
    console.log("Conexão inicializada")
})

