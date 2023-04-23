const authController = require("../controllers/authController")
const bookController = require("../controllers/bookController")
const catalogController = require("../controllers/catalogController")
const homeController = require("../controllers/homeController")
const profileController = require("../controllers/profileController")
const { isUser} = require("../middlewares/guards")

module.exports = (app) => {
    app.use("/", homeController)
    app.use("/auth", authController)
    app.use("/book", bookController)
    app.use("/catalog", catalogController) 
    app.use("/profile", profileController)
}