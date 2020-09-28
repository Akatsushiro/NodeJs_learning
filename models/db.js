const Sequelize = require("sequelize")

//database connection

const sequelize = new Sequelize('node', 'patrick', '1234',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}