const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const JWT_SECRET = "jwtsecret"

async function register(
    username, //hasUsername?
    email, //hasEmail?
    password
) { //hasEmail? hasUsername?
    if (email && await User.findOne({ email }).collation({ locale: "en", strength: 2 })) {
        throw new Error("Email is taken")
    }

    if (await User.findOne({ username }).collation({ locale: "en", strength: 2 })) {
        throw new Error("Username is taken")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username, //hasUsername?
        email, //hasEmail?
        hashedPassword
    })

    return createSession(user)
}

async function login(email, password) { //hasEmail? //hasUsername?
    const user = await User.findOne({ email }).collation({ locale: "en", strength: 2 })

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
    username, //hasUsername?
    email, //hasEmail?
}) {
    const payload = {
        _id,
        username, //hasUsername?
        email, //hasEmail?

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