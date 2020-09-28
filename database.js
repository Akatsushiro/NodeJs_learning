const Sequelize = require("sequelize")

//database connection

const sequelize = new Sequelize('node', 'patrick', '1234',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(err){
    console.log("Erro ao conectar" + err)
})

const Usuario = sequelize.define('Usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER
    }
})


//Criar a tabela
//Usuario.sync({force: true})

//Inserir registro no banco
// Usuario.create({
//     nome: "Patrick Dantas",
//     idade: 20
// })