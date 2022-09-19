const Position = require("../models/jobPostion")

exports.getopenPositions = (req, res, next) => {
    Position.findAll()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
  }

  exports.createOpenPosition = (req,res,next) => {
    const title = req.body.title
    const jobTitle = req.body.jobTitle
    const jobRole = req.body.jobRole
    const openRoles = req.body.openRoles
    const location = req.body.location
    const workType = req.body.workType
    const responsibilities = req.body.responsibilities
    const requirements = req.body.requirements

    Position.create({
        title : title,
        jobTitle : jobTitle,
        jobRole : jobRole,
        openRoles : openRoles,
        location : location,
        workType : workType,
        responsibilities : responsibilities,
        requirements : requirements
    })
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      })
    
  }