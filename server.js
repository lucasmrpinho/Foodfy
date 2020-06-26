const express = require('express')
const nunjucks = require('nunjucks')

const recipes = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express: server,
    noCache: true
})

server.get("/", (req,res) => {
    return res.render('inicio',{cards: recipes})
})

server.get("/sobre", (req,res) => {
    return res.render('sobre')
})

server.get("/receitas", (req,res) => {
    return res.render('receitas',{cards: recipes})
})

server.get("/recipe-info/:id", (req,res) => {
    const recipeId = req.params.id
    const recipe = recipes[recipeId]


    return res.render('recipe-info',{ recipe })
})




server.use(function(req,res){
    res.status(404).render("not-found")
})


server.listen(5000, () =>{
    console.log('server is running')
})

