const express = require('express')

const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app");
});

app.get("/sobre", function(req, res){
    res.send("Sobre mim");
});

app.get("/blog", function(req, res){
    res.send("Blog do bob");
});

app.listen(8081, function(){
        console.log("servidor rodando");
});