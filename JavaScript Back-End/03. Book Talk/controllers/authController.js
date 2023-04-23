const { register, login } = require("../services/userService")
const { parseError } = require("../util/parser")
const { body, validationResult } = require("express-validator")
const { isGuest } = require("../middlewares/guards")

const authController = require("express").Router()

authController.get("/register", isGuest(), (req, res) => {
    res.render("register", {
        title: "Register Page"
    })
})

authController.post("/register", isGuest(), 
    body("email") // hasEmail?
        .isLength({ min: 10 }).withMessage("Email must be at least 10 characters long")
    ,
    body("username") // hasUsername?
        .isLength({ min: 4 }).withMessage("Username must be at least 4 characters long")
    //.isAlphanumeric().withMessage("Username may contain only letters and numbers")
    ,
    body("password")
        .isLength({ min: 5 }).withMessage("Password must be at least 5 characters long")
    //.isAlphanumeric().withMessage("Password may contain only letters and numbers")
    ,
    async (req, res) => {
        try {
            const { errors } = validationResult(req)

            if (errors.length > 0) {
                throw errors
            }

            if (req.body.password != req.body.rePassword) {
                throw new Error("Passswords don't match")
            }

            const token = await register(
                req.body.username, // hasUsername?
                req.body.email, // hasEmail?
                req.body.password
            )
            res.cookie("token", token)
            res.redirect("/")
        } catch (error) {
            const errors = parseError(error)[0] // [0]
            
            res.render("register", {
                title: "Register Page",
                errors,
                body: {
                    username: req.body.username, // hasUsername?
                    email: req.body.email, // hasEmail?
                }
            })
        }
    })

authController.get("/login", isGuest(), (req, res) => {
    res.render("login", {
        title: "Login Page"
    })
})

authController.post("/login", isGuest(), async (req, res) => {
    try {
        const token = await login(
            req.body.email, //hasEmail?
            //req.body.username, //hasUsername?
            req.body.password
        )

        res.cookie("token", token)
        res.redirect("/")
    } catch (error) {
        const errors = parseError(error)[0] // [0]

        res.render("login", {
            title: "Login Page",
            errors,
            body: {
                email: req.body.email, // hasEmail?
                //username: req.body.username // hasUsername?
            }
        })
    }
})

authController.get("/logout", (req, res) => {
    res.clearCookie("token")
    res.redirect("/")
})

module.exports = authController