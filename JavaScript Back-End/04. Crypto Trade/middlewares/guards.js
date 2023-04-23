const homeController = require("../controllers/homeController")

function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next()
        } else {
            //res.redirect("/auth/login")

            res.render("404", {
                title: "404 Not Found"
            })
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            //res.redirect("/")

            res.render("404", {
                title: "404 Page Not Found"
            })
        } else {
            next()
        }
    }
}

function isOwner() {
    return (req, res, next) => {
        if (req.user && res.locals.crypto.owner.toString() == req.user._id.toString()) {
            res.locals.isOwner = true
            next()
        } else {
            //res.redirect("/auth/login")

            res.render("404", {
                title: "404 Not Found"
            })
        }
    }
}

module.exports = {
    isUser,
    isGuest,
    isOwner
}