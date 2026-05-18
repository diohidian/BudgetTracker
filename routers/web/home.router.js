const express = require("express");
const HomeController = require("../../controllers/home.controller");

const homeRouter = express.Router();
const homeController = new HomeController();

homeRouter.get("/", homeController.home)
homeRouter.post("/v1/home", homeController.storeTransaction)
homeRouter.delete("/v1/home/:id", homeController.deleteTransaction);
homeRouter.put("/v1/home/:id", homeController.updateTransaction)


module.exports = homeRouter