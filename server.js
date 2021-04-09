const express = require('express');
const nunjucks = require('nunjucks');
const receitas = require('./data')

const server = express();

server.set("view engine", "njk")

server.use(express.static("public"))

nunjucks.configure("view", {
    express: server
})

server.get("/", (req, res)=>{
    return res.render("index")
})

server.get("/sobre", (req, res)=>{
    return res.render("sobre")
})

server.get("/receitas", (req, res)=>{
    return res.render("receitas", {itens : receitas})
})

server.get("/recipes/:index", (req, res)=>{
    const receitaIndex = req.params.index

    return res.render("recipes", {itens : receitas[receitaIndex]})
})

server.listen(5000, ()=>{
    console.log("server is run");
})


