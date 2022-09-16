const express = require("express")
const positionController = require("../controllers/openPositions")

const router = express.Router()

router.get("/positions" , positionController.getopenPositions)

router.post("/positions" , positionController.createOpenPosition)

module.exports = router