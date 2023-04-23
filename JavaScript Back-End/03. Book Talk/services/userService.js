const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
//const { use } = require("../controllers/homeController")
const User = require("../models/User")

const JWT_SECRET = "jwtsecret"

async function register(email, username, password) {
    if (email && await User.findOne({ email }).collation({ locale: "en", strength: 2 })) {
        throw new Error("Email is taken")
    }

    if (await User.findOne({ username }).collation({ locale: "en", strength: 2 })) {
        throw new Error("Username is taken")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        email,
        username,
        hashedPassword
    })

    return createSession(user)
}

async function login(
    email, //hasEmail?
    //username, //hasUsername?
    password
) {
    const user = await User.findOne({
        email, //hasEmail?
        //username //hasUsername?
    }).collation({ locale: "en", strength: 2 })

    if (!user) {
        throw new Error("Incorrect email or password") //hasEmail? //hasUsername?
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword)

    if (hasMatch == false) {
        throw new Error("Incorrect email or password") //hasEmail? //hasUsername?
    }

    return createSession(user)
}

function createSession({
    _id,
    email, //hasEmail?
    username //hasUsername?
}) {
    const payload = {
        _id,
        email, //hasEmail?
        username //hasUsername?

    }

    return jwt.sign(payload, JWT_SECRET)
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    register,
    login,
    verifyToken,
}