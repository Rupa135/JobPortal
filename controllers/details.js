const User = require("../models/user")

exports.getDetails = (req,res,next) => {
    User.findAll()
    .then(users => {
        res.status(200).send(users)
      })
    .catch(err => console.log(err))
}

exports.createUser = (req,res,next) => {
    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    const Email = req.body.Email
    const DOB = req.body.DOB
    const ContactNumber = req.body.ContactNumber
    const JobTitle = req.body.JobTitle

    User.create({
        FirstName : FirstName,
        LastName : LastName,
        Email : Email,
        DOB : DOB,
        ContactNumber : ContactNumber,
        JobTitle : JobTitle
    })
    .then(data => {
      console.log(data);
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
})
}
