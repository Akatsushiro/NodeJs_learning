const express = require("express")
const app = express()
const HANDLEBARS = require("handlebars")
const handlebars = require("express-handlebars")
const body_parser = require("body-parser")
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
    // -----------------------------------------
const Usuario = require("./models/Usuario")


app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

app.engine('handlebars', handlebars({ handlebars: allowInsecurePrototypeAccess(HANDLEBARS), defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/novo_usuario', function(req, res) {
    res.render("cadastro")
})

app.get('/listar_usuarios', function(req, res) {
    Usuario.userList(res, 'listar_usuarios')
})

app.post('/cadastro_usuario', function(req, res, next) {
    Usuario.createUser(req.body.nome, req.body.idade)
    next()
}, function(req, res) {
    res.redirect("/listar_usuarios")
})

app.get("/delete_user/:id", function(req, res, next) {
    Usuario.deleteUser(req)
    next()
}, function(req, res) {
    res.redirect("/listar_usuarios")
})

app.get("/", function(req, res) {

})


app.listen(9090)