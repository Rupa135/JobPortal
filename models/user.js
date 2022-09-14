const Sequelize = require("sequelize")
const sequelize = require("../util/database")


const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNULL: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "First name required"
            },
            isAlpha: {
                args: true,
                msg: "Please enter valid name"
            },
            checkLength(value) {
                if (value.length > 15) {
                    throw new Error("Length must be 15 or below");
                }
            }
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Last name required"
            },
            isAlpha: {
                args: true,
                msg: "Please enter valid name"
            },
            checkLength(value) {
                if (value.length > 15) {
                    throw new Error("Length must be 15 or below");
                }
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Email-id required"
            },
            isEmail: {
                args: true,
                msg: 'Valid email-id required'
            }
        },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
    },
    dob: {
        type: Sequelize.DATE,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "DOB required"
            },
            isDate: {
                args: true,
                msg: "Enter date in valid format"
            }
        }
    },
    contactNumber: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Phone number required"
            },
            isNumeric: {
                args: true,
                msg: "Please enter a number"
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
            args: true,
            msg: 'phone number already in use!'
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Address is required"
            },
        }
    },
    city: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "City is required"
            },
        }
    },
    postalCode: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        isNumeric : true
    },
    jobTitle: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Job title required"
            },
        }
    },
    experience: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        isNumeric: true,
        validate: {
            notEmpty: {
                args: true,
                msg: "Experience required"
            },
        }
    },

    skills: {
        type: Sequelize.STRING,
        allowNULL: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Skills required"
            }
        }
    },
    certifications: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    linkedInUrl: {
        type: Sequelize.STRING,
        allowNULL: false,
        isUrl: true
    },
    resumeUrl: {
        type: Sequelize.STRING,
        allowNULL: false,
        isUrl: true
    },

    comments: {
        type: Sequelize.STRING,
        allowNULL: false
    },
})

module.exports = User