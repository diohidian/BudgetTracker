const express = require("express")
const userRouter = express.Router()
const UserController = require("../../controllers/user-controller")

const userController = new UserController()

userRouter.get("/", userController.index)
userRouter.get("/register", userController.register)
userRouter.post("/register", userController.store)
userRouter.post("/login", userController.storeLogin)

module.exports = userRouter