const User = require("../models/user")
const { use } = require("../routes/details")

exports.getUserDetails = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.status(200).send(users)
    })
    .catch(err => console.log(err))
}

exports.getUser = (req, res, next) => {
  const userId = req.params.id
  User.findByPk(userId)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "User not found"
      });
    })
}

exports.createUser = (req, res, next) => {
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,
    contactNumber: req.body.contactNumber,
    address: req.body.address,
    city: req.body.city,
    postalCode: req.body.postalCode,
    jobTitle: req.body.jobTitle,
    experience: req.body.experience,
    skills: req.body.skills,
    certifications: req.body.certifications,
    linkedInUrl: req.body.linkedInUrl,
    resumeUrl: req.body.resumeUrl,
    comments: req.body.comments
  }

  User.findOrCreate({
    where: {
      contactNumber: userData.contactNumber,
      email: userData.email
    },
    defaults: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      dob: userData.dob,
      address: userData.address,
      city: userData.city,
      postalCode: userData.postalCode,
      jobTitle: userData.jobTitle,
      experience: userData.experience,
      skills: userData.skills,
      certifications: userData.certifications,
      linkedInUrl: userData.linkedInUrl,
      resumeUrl: userData.resumeUrl,
      comments: userData.comments
    },
  })

    .then(([data, created]) => {
      if (created) {
        console.log(data);
        res.status(200).send(data)
      }
      else {
        res.status(500).send({
          message: "User with same email & contact number already exists , please enter new details"
        });
      }
    })

    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    })
}


exports.updateUserDetails = (req, res, next) => {
  const userId = req.body.id
  const updatedFirstName = req.body.firstName
  const updatedLastName = req.body.lastName
  const updatedEmail = req.body.email
  const updateddob = req.body.dob
  const updatedContactNumber = req.body.contactNumber
  const updatedAddress = req.body.address
  const updatedCity = req.body.city
  const updatedPostalCode = req.body.postalCode
  const updatedJobTitle = req.body.jobTitle
  const updatedExperience = req.body.experience
  const updatedSkills = req.body.skills
  const updatedCertifications = req.body.certifications
  const updatedLinkedInUrl = req.body.linkedInUrl
  const updatedResumeUrl = req.body.resumeUrl
  const updatedComments = req.body.comments

  User.findByPk(userId)
    .then(user => {
      user.firstName = updatedFirstName
      user.lastName = updatedLastName
      user.email = updatedEmail
      user.dob = updateddob
      user.contactNumber = updatedContactNumber
      user.address = updatedAddress
      user.city = updatedCity
      user.postalCode = updatedPostalCode
      user.jobTitle = updatedJobTitle
      user.experience = updatedExperience
      user.skills = updatedSkills
      user.certifications = updatedCertifications
      user.linkedInUrl = updatedLinkedInUrl
      user.resumeUrl = updatedResumeUrl
      user.comments = updatedComments

      user.save()
      res.status(200).send(user)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "User already exists"
      });
    })
}