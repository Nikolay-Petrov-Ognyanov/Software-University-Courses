const Book = require("../models/Book");

async function getAllByDate(search) {
    const query = {}

    if (search) {
        query.title = new RegExp(search, "i")
    }

    return Book.find(query).sort({ createdAt: 1 }).lean()
}

async function getRecent() {
    return Book.find({}).sort({ userCount: -1 }).limit(3).lean()
}

async function createBook(book) {
    return Book.create(book)
}

async function getById(id) {
    return Book.findById(id).lean()
}

async function getByIdRaw(id) {
    return Book.findById(id)
}

async function getAll() {
    return Book.find({}).lean()
}

async function deleteById(id) {
    return Book.findByIdAndDelete(id)
}

async function updateById(book, data) {
    book.title = data.title
    book.description = data.description
    book.imageUrl = data.imageUrl
    book.duration = data.duration

    return book.save()
}

async function enrollUser(book, userId) {
    book.users.push(userId)
    book.userCount++

    return book.save()
}

async function wishBook(bookId, userId) {
    const book = await Book.findById(bookId)

    book.wishingList.push(userId)
    await book.save()
}

async function getUserWishes(userId) {
    return await Book.find({wishes: userId}).lean()
}

module.exports = {
    getAllByDate,
    getRecent,
    createBook,
    getById,
    getByIdRaw,
    getAll,
    deleteById,
    updateById,
    enrollUser,
    wishBook,
    getUserWishes
}