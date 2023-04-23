const { isOwner, isUser } = require("../middlewares/guards")
const preload = require("../middlewares/preload")
const { createBlog, getById, deleteById, updateById, followBlog, getUserById } = require("../services/blogService")
const { parseError } = require("../util/parser")
const blogController = require("express").Router()

blogController.get("/create", isUser(), (req, res) => {
    res.render("create", {
        title: "Create Blog",
        user: req.user
    })
})

blogController.get("/:id", preload(true), async (req, res) => {
    const blog = res.locals.blog

    const blogOwner = await getUserById(blog.owner)

    blog.email = (await getUserById(blog.owner)).email
    
    if (req.user) {
        blog.isOwner = blog.owner.toString() == req.user._id.toString()

        if (blog.owner == req.user._id) {
            blog.isOwner = true
        } else if (blog.followList.map(follow => follow.toString()).includes(req.user._id.toString())) {
            blog.isFollowed = true
        }

        let followers = []

        for (let userId of blog.followList) {
            followers.push((await getUserById(userId.toString())).email)
        }

        blog.followList = followers.join(", ")

        if (blog.isOwner) {
            res.render("details-owner", {
                title: blog.title,
                user: req.user,
                blog
            })
        } else {
            res.render("details-user", {
                title: blog.title,
                user: req.user,
                blog
            })
        }
    } else {
        res.render("details-guest", {
            title: blog.title,
            user: req.user,
            blog
        })
    }
})

blogController.get("/:id/delete", preload(), isOwner(), async (req, res) => {
    await deleteById(req.params.id)
    res.redirect("/catalog")
})

blogController.post("/create", async (req, res) => {
    const blog = { //checkValues
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        content: req.body.content,
        category: req.body.category,
        owner: req.user._id,
    }

    try {
        if (Object.values(blog).some(value => !value)) {
            throw new Error("All fields are required")
        }

        await createBlog(blog)
        res.redirect("/catalog") //redirect to?
    } catch (error) {
        res.render("create", {
            title: "Create Blog Review",
            errors: parseError(error)[0], // [0]
            body: blog,
            user: req.user

        })
    }
})

blogController.get("/:id/edit", preload(true), isOwner(), async (req, res) => {
    const blog = res.locals.blog

    res.render("edit", {
        title: "Edit Blog",
        blog,
        user: req.user
    })
})

blogController.post("/:id/edit", preload(), isOwner(), async (req, res) => {
    const blog = res.locals.blog
    const reqParamsId = req.params.id

    try {
        await updateById(blog, req.body)
        res.redirect(`/blog/${req.params.id}`)
    } catch (error) {
        req.body._id = reqParamsId
        res.render("edit", {
            title: "Edit Blog",
            errors: parseError(error)[0], //[0]
            blog: req.body,
            user: req.user
        })
    }
})

blogController.get("/:id/follow", async (req, res) => {
    const blog = await getById(req.params.id)

    try {
        if (blog.owner == req.user._id) {
            blog.isOwner = true

            throw new Error("Cannot follow your own blog")
        }

        if (blog.followList.map(follow => follow.toString()).includes(req.user._id.toString())) {
            blog.isFollowed = true

            throw new Error("Cannot follow the same blog twice")
        }

        await followBlog(req.params.id, req.user._id)
        res.redirect(`/blog/${req.params.id}`)
    } catch (error) {
        res.render("details", {
            title: blog.title,
            blog,
            errors: parseError(error)[0],
            user: req.user
        })
    }
})

module.exports = blogController