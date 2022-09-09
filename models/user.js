const Sequelize = require("sequelize")
const sequelize = require("../util/database")

const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/ 

const User = sequelize.define("details" , {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNULL : false,
        primaryKey : true
    },
    FirstName : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"First name required"
            },
            
        }
    },
    LastName : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Last name required"
            }
        }
    },
    Email : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Email-id required"
            },
            isEmail:{
                args:true,
                msg:'Valid email-id required'
            }
            },
            unique: {
                args:true,
                msg: 'Email address already in use!'
             }  
    },
    DOB : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"DOB required"
            }
        }
    },
    ContactNumber : {
        type: Sequelize.STRING,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Phone number required"
            }
        },
        unique: {
            args:true,
            msg: 'phone number already in use!'
       }  
        
    },
    JobTitle : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Job title required"
            },
        }
    },
    // experience : {
    //     type : Sequelize.INTEGER,
    //     allowNULL : false
    // }

})

module.exports = User