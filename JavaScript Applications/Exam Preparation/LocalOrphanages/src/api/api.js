import { html, render } from "../../node_modules/lit-html/lit-html.js"
import page from '../../node_modules/page/page.mjs'

let host = 'http://localhost:3030'

async function request(url, method, data) {
    let options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    let userData = getUserData()

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken
    }

    try {
        let response = await fetch(host + url, options)

        if (response.ok == false) {
            if (response.status == 403) {
                clearUserData()
            }

            let error = await response.json()
            throw new Error(error.message)
        }

        if (response.status == 204) {
            return response
        } else {
            return response.json()
        }
    } catch (error) {
        alert(error.message)
        throw error
    }
}

export async function get(url) {
    return request(url, 'get')
}

export async function post(url, data) {
    return request(url, 'post', data)
}

export async function put(url, data) {
    return request(url, 'put', data)
}

export async function del(url) {
    return request(url, 'delete')
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}

export async function login(email, password) {
    const result = await post('/users/login', { email, password })

    const userData = {
        id: result._id,
        username: result.username,
        email: result.email,
        accessToken: result.accessToken
    }

    setUserData(userData)
    return result
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password})

    const userData = {
        id: result._id,
        email: result.email,
        accessToken: result.accessToken
    }

    setUserData(userData)
    return result
}

export function logout() {
    get('/users/logout')
    clearUserData()
}