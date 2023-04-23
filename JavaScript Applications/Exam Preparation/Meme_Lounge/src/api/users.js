import { clearUserData, setUserData } from "./api.js"
import { get, post } from "./api.js"

export async function login(email, password) {
    let result = await post('/users/login', { email, password })

    let userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        accessToken: result.accessToken
    }

    setUserData(userData)
    return result
}

export async function register(username, email, password, gender) {
    let result = await post('/users/register', { username, email, password, gender })

    let userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        gender: result.gender,
        accessToken: result.accessToken
    }

    setUserData(userData)
    return result
}

export function logout() {
    get('/users/logout')
    clearUserData()
}