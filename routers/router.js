const express = require("express")
const userRouter = require("./web/user-router")
const router = express.Router()
const homeRouter =require("./web/home.router")

const HomeController = require("../controllers/home.controller")
const homeController = new HomeController()

router.use("/", userRouter)
router.use("/home", homeRouter)
// router.put("/home/:id", homeController.updateTransaction)

module.exports = router
