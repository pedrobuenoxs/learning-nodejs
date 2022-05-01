//Instanciando express
const express = require("express");
const app = express();

//HTML Engine
const handlebars = require('express-handlebars');

//Bodyparser
const bodyParser = require('body-parser');

//Models post
const Post = require('./models/Post')


// Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    
    //Bodyparser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json())


    app.get('/', function(req,res){
        Post.findAll({order:[['id','desc']]}).then(function(posts){
            res.render('home',{posts:posts})
        })        
    })

    app.get('/cad',function(req,res){
        res.render('forms')
    })
 
    app.post('/add',function(req,res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("erro ao criar postagem. erro: "+ erro)
        })
    })

    app.get('/deletar/:id',function(req,res){
        Post.destroy({where:{'id':req.params.id}}).then(function(){
            res.send("postagem deletada")
        }).catch(function(erro){
            res.send("postagem nao existe")
        })
    })


app.listen(3000, function(){
    console.log("Acesse o servidor em http://localhost:3000");
});