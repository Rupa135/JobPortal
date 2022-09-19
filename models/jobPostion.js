const Sequelize = require("sequelize")
const sequelize = require("../util/database")


const jobPosition = sequelize.define("openPositions", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true
    },
    title : {
        type : Sequelize.STRING,
        allowNULL : false,
    },
    jobTitle : {
        type : Sequelize.STRING,
        allowNULL : false,
        unique: {
            args: true,
            msg: 'Mentioned job title already exists!!'
        }
    },
    jobRole : {
        type : Sequelize.STRING,
        allowNULL : false,
    },
    openRoles : {
        type : Sequelize.INTEGER,
        allowNULL : false,
        validate: {
            isNumeric: {
                args: true,
                msg: "Please enter valid open roles"
            }
        }
    },
    location : {
        type : Sequelize.STRING,
        allowNULL : false
    },
    workType : {
        type : Sequelize.STRING,
        allowNULL : false
    },
    responsibilities : {
        type : Sequelize.STRING,
        allowNULL : false
    },
    requirements : {
        type : Sequelize.STRING,
        allowNULL : false
    }
    
})

module.exports = jobPosition