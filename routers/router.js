const express = require("express")
const userRouter = require("./user-router")
const router = express.Router()
const homeRouter =require("../routers/home.router")

router.use("/", userRouter)
router.use("/home", homeRouter)

module.exports = router
