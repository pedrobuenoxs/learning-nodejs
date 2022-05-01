const Sequelize = require('sequelize')
const sequelize = new Sequelize('db1','root','270491',{
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}