const db = require('./db')

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: db.Sequelize.INTEGER
    }
})

var createUser = function(nome, idade, redirect = '/') {
    Usuario.create({
        nome: nome,
        idade: idade
    }).then(function() {
        console.log("Cadastro realizado com sucesso")
    }).catch(function() {
        console.log("Erro ao salvar o usuario")
    })
}

var userList = function(res, page) {
    Usuario.findAll().then(function(lista_usuarios) {
        res.render(page, { lista: lista_usuarios })
    })
}

var deleteUser = function(req) {
    Usuario.destroy({
        where: { 'id': req.params.id }
    }).then(function() {
        console.log("Usuario apagado com sucesso")
    }).catcth(function(erro) {
        console.log("Erro ao apagar o usuario")
    })
}

module.exports = {
    Usuario: Usuario,
    createUser: createUser,
    userList: userList,
    deleteUser: deleteUser
}