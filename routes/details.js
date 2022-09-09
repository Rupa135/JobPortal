const express = require("express")
const controller = require("../controllers/details")

const router = express.Router()

router.get("/details", controller.getDetails)

router.post("/details" , controller.createUser)

module.exports = router