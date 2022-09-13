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
            isAlpha : {
                args : true,
                msg : "Please enter valid name"
            },
            checkLength(value) {
                if (value.length > 15) {
                    throw new Error("Length must be 15 or below");
            }}
        }
    },
    LastName : {
        type : Sequelize.STRING,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"Last name required"
            },
            isAlpha : {
                args : true,
                msg : "Please enter valid name"
            },
            checkLength(value) {
                if (value.length > 15) {
                    throw new Error("Length must be 15 or below");
            }}
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
        type : Sequelize.DATE,
        allowNULL : false,
        validate:{
            notEmpty:{
                args:true,
                msg:"DOB required"
            },
            isDate : {
                args : true,
                msg : "Enter date in valid format"
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
            },
            isNumeric : {
                args : true,
                msg : "Please enter a number"
            },
            checkLength(value) {
                if (value.length < 10) {
                    throw new Error("Please enter valid number");
            }
               else if (value.length > 10) {
                    throw new Error("Please enter valid number");
        }
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