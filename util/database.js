const Sequelize = require("sequelize")

const sequelize = new Sequelize("jobprofiles" , "root" , "Qwerty@123" , {
    dialect : "mysql" , 
    host : "localhost"
})


module.exports = sequelize