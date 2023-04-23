const authController = require("../controllers/authController")
const blogController = require("../controllers/blogController")
const catalogController = require("../controllers/catalogController")
const homeController = require("../controllers/homeController")
const profileController = require("../controllers/profileController")
const { isUser} = require("../middlewares/guards")

module.exports = (app) => {
    app.use("/auth", authController)
    app.use("/blog", blogController)
    app.use("/catalog", catalogController) 
    app.use("/profile", profileController)
    app.use("/", homeController)
}