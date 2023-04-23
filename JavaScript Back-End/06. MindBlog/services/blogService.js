const Blog = require("../models/Blog");
const User = require("../models/User")

async function updateById(blog, data) { //checkValues
    blog.title = data.title
    blog.imageUrl = data.imageUrl
    blog.content = data.content
    blog.category = data.category

    return blog.save()
}

async function getAll(search) {
    const query = {}

    if (search) {
        //query.title = new RegExp(search, "i")

        //console.log(query)
    }

    return Blog.find(query)
        //.sort({ createdAt: 1 })
        .lean()
}

async function getUserFollows(userId) {
    return await Blog.find({ followList: userId }).lean()
}

async function getUserById(userId) {
    return User.findById(userId).lean()
}

async function getRecent() {
    return Blog.find({}).sort({ userCount: -1 }).limit(3).lean()
}

async function createBlog(blog) {
    return Blog.create(blog)
}

async function getById(id) {
    return Blog.findById(id).lean()
}

async function getByIdRaw(id) {
    return Blog.findById(id)
}

async function getAll() {
    return Blog.find({}).lean()
}

async function deleteById(id) {
    return Blog.findByIdAndDelete(id)
}


async function enrollUser(blog, userId) {
    blog.users.push(userId)
    blog.userCount++

    return blog.save()
}

async function followBlog(blogId, userId) {
    const blog = await Blog.findById(blogId)

    blog.followList.push(userId)
    await blog.save()
}

// async function getUserFollows(userId) {
//     return await Blog.find({ follows: userId }).lean()
// }

module.exports = {
    getAll,
    getRecent,
    createBlog,
    getById,
    getByIdRaw,
    getAll,
    deleteById,
    updateById,
    enrollUser,
    followBlog,
    //getUserFollows,
    getUserById,
    getUserFollows
}