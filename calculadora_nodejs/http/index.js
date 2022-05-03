const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Welcome to my App!")
})

app.get("sobre", function(req,res){
    res.send("My webSite About")
})

app.get("blog", function(reqq, res){
    res.send("Welcome to my blog")
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url https://localhost:8081")
})
//localhost:porta