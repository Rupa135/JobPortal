const express = require("express")
const controller = require("../controllers/details")

const router = express.Router()

router.get("/details", controller.getUserDetails)

router.post("/details" , controller.createUser)

router.get("/user/:id" , controller.getUser)

router.post("/update" , controller.updateUserDetails)

module.exports = router