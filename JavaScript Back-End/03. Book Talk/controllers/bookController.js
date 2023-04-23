const { isOwner } = require("../middlewares/guards")
const preload = require("../middlewares/preload")
const { createBook, getById, deleteById, editById, updateById, enrollUser, wishBook } = require("../services/bookService")
const { parseError } = require("../util/parser")
const bookController = require("express").Router()

bookController.get("/create", (req, res) => {
    res.render("create", {
        title: "Create Book"
    })
})

bookController.get("/:id", preload(true), async (req, res) => {
    const book = res.locals.book

    if (req.user) {
        book.isOwner = book.owner.toString() == req.user._id.toString()

        if (book.owner == req.user._id) {
            book.isOwner = true
        } else if (book.wishingList.map(wish => wish.toString()).includes(req.user._id.toString())) {
            book.isWished = true
        }

        if (book.isOwner) {
            res.render("details-isOwner", {
                title: book.title,
                user: req.user,
                book
            })
        } else {
            res.render("details-isNotOwner", {
                title: book.title,
                user: req.user,
                book
            })
        }
    } else {
        res.render("details", {
            title: book.title,
            user: req.user,
            book
        })
    }
})

bookController.get("/:id/delete", preload(), isOwner(), async (req, res) => {
    await deleteById(req.params.id)
    res.redirect("/catalog")
})

bookController.post("/create", async (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        stars: req.body.stars,
        imageUrl: req.body.imageUrl,
        review: req.body.review,
        owner: req.user._id
    }

    try {
        if (Object.values(book).some(value => !value)) {
            throw new Error("All fields are required")
        }

        await createBook(book)
        console.log(book)
        res.redirect("/catalog") //redirect to?
    } catch (error) {
        console.log(error)
        res.render("create", {
            title: "Create Book Review",
            errors: parseError(error)[0], // [0]
            
            body: book
        })
    }
})

bookController.get("/:id/edit", preload(true), isOwner(), async (req, res) => {
    const book = res.locals.book

    res.render("edit", {
        title: "Edit Book",
        book
    })
})

bookController.post("/:id/edit", preload(), isOwner(), async (req, res) => {
    const book = res.locals.book
    const reqParamsId = req.params.id

    try {
        await updateById(book, req.body)
        res.redirect(`/book/${req.params.id}`)
    } catch (error) {
        req.body._id = reqParamsId
        res.render("edit", {
            title: "Edit Book",
            errors: parseError(error)[0], //[0]
            book: req.body
        })
    }
})

bookController.get("/:id/wish", async (req, res) => {
    const book = await getById(req.params.id)

    try {
        if (book.owner == req.user._id) {
            book.isOwner = true

            throw new Error("Cannot wish for your own book")
        }

        if (book.wishingList.map(wish => wish.toString()).includes(req.user._id.toString())) {
            book.isWished = true

            throw new Error("Cannot wish the same book twice")
        }

        await wishBook(req.params.id, req.user._id)
        res.redirect(`/book/${req.params.id}`)
    } catch (error) {
        res.render("details", {
            title: book.title,
            book,
            errors: parseError(error)[0]
        })
    }
})

module.exports = bookController