const { isUser } = require("../middlewares/guards")
const { getUserFollows, getUserById, getAll } = require("../services/blogService")

const profileController = require("express").Router()

profileController.get("/", isUser(), async (req, res) => {
    const user = req.user
    const blogs = await getAll()

    //console.log(follows)

    let blogsCreatedByUser = []
    let blogsFollowedByUser = []

    for (let blog of blogs) {
        if (blog.owner[0].toString() == user._id) {
            blogsCreatedByUser.push(blog)
        }

        for (let entry of blog.followList) {
            if (entry.toString() == user._id) {
                blogsFollowedByUser.push(blog)
            }
        }
    }

    let createdBlogsCount = blogsCreatedByUser.length
    let followedBlogsCount = blogsFollowedByUser.length

    //console.log(blogsCreatedByUser)

    res.render("profile", {
        title: "Profile Page",
        user,
        blogsCreatedByUser,
        blogsFollowedByUser,
        createdBlogsCount,
        followedBlogsCount
    })
})

module.exports = profileController