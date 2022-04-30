/* 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const express = require("express");
const app = express();


app.get("/",function(req,res){
    res.send("Ola pessoa.")
})

app.get("/sobre",function(req,res){
    res.send("Eu sou o Pedro e estou estudando Node js para desenvolvimento back end")
})

app.get("/pessoa/:nome/:cidade",function(req,res){
    res.send("<h1>Bem vindo " + req.params.nome + "</h1>" + "<h2>Pelo visto você é de: " + req.params.cidade + "</h2>");


})
app.get("/:idade",function(req,res){
    res.send("Você tem " + req.params.idade + " meus parabéns");


})




app.listen(3000, function(){
    console.log("Acesse o servidor em http://localhost:3000");
});