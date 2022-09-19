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
        validate: {
            notEmpty: {
                args: true,
                msg: "Title is required"
            }
        }
    },
    jobTitle : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate: {
            notEmpty: {
                args: true,
                msg: "JobTitle is required"
            }
        },
        unique: {
            args: true,
            msg: 'Mentioned job title already exists!!'
        }
    },
    jobRole : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Job role is required"
            }
        }
    },
    openRoles : {
        type : Sequelize.INTEGER,
        allowNULL : false,
        validate: {
            notEmpty: {
                args: true,
                msg: "open roles is required"
            },
            isNumeric: {
                args: true,
                msg: "Please enter valid open roles"
            }
        }
    },
    location : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Location is required"
            }
        }
    },
    workType : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Work type is required"
            }
        }
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