const express = require("express")
const userRouter = express.Router()
const UserController = require("../controllers/user-controller")

const userController = new UserController()

userRouter.get("/", userController.index)
userRouter.get("/register", userController.register)

module.exports = userRouter