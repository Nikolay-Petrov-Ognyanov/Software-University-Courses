const authController = require("../controllers/authController")
const auctionController = require("../controllers/auctionController")
const catalogController = require("../controllers/catalogController")
const homeController = require("../controllers/homeController")
const profileController = require("../controllers/profileController")
const { isUser} = require("../middlewares/guards")

module.exports = (app) => {
    app.use("/", homeController)
    app.use("/auth", authController)
    app.use("/auction", auctionController)
    app.use("/catalog", catalogController) 
    app.use("/profile", profileController)
}