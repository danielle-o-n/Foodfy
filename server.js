const express = require('express');
const nunjucks = require('nunjucks');

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
    return res.render("receitas")
})

server.listen(5000, ()=>{
    console.log("server is run");
})


