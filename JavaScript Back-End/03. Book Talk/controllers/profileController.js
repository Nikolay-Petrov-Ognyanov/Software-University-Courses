const { getUserWishes, getById } = require("../services/bookService")

const profileController = require("express").Router()

profileController.get("/", async (req, res) => {
    const user = req.user
    const wishes = await getUserWishes(req.params.id)
    
    console.log(req.user)
    if (user) {
        res.render("profile", {
            title: "Profile Page",
            user,
            wishes
        })
    } else {
        
    }
})

module.exports = profileController