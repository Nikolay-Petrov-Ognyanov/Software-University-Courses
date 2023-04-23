import { html, render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { createView } from './create.js'
import { dashboardView } from './dashboard.js'
import { detailsPage } from './details.js'
import { homeView } from './home.js'
import { loginView } from './login.js'
import { registerView } from './register.js'

export let host = 'http://localhost:3030'
export let main = document.querySelector('main')

setUserNav()

page('/', decorateContext, homeView)
page('/login', decorateContext, loginView)
page('/register', decorateContext, registerView)
page('/dashboard', decorateContext, dashboardView)
page('/create', decorateContext, createView)
page('/details/:id', decorateContext, detailsPage)

page.start()


async function request(url, options) {
    try {
        let response = await fetch(url, options)

        if (response.ok == false) {
            let error = await response.json()
            throw new Error(error.message)
        }

        try {
            return await response.json()
        } catch (error) {
            return response
        }
    } catch (error) {
        alert(error.message)
        throw error
    }
}

function createOptions(method, body) {
    let options = {
        method,
        headers: {}
    }

    let userData = getUserData()

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    return options
}

export async function get(url) {
    return await request(url, createOptions('get'))
}

export async function post(url, data) {
    return await request(url, createOptions('post', data))
}

export async function put(url, data) {
    return await request(url, createOptions('put', data))
}

export async function del(url) {
    return await request(url, createOptions('delete'))
}

export function getUserData() {
    let userData = sessionStorage.getItem('userData')

    if (userData) {
        return JSON.parse(userData)
    } else {
        return undefined
    }
}

export function setUserData(userData) {
    sessionStorage.setItem('userData', JSON.stringify(userData))
}

export function clearUserData() {
    sessionStorage.removeItem('userData')
}

export function setUserNav() {
    let userData = getUserData()

    if (userData) {
        document.querySelectorAll('.user').forEach(entry => entry.style.display = 'inline')
        document.querySelectorAll('.guest').forEach(entry => entry.style.display = 'none')
    } else {
        document.querySelectorAll('.user').forEach(entry => entry.style.display = 'none')
        document.querySelectorAll('.guest').forEach(entry => entry.style.display = 'inline')
    }
}

export function decorateContext(context, next) {
    context.render = (content) => render(content, main)
    context.setUserNav = setUserNav()
    context.user = getUserData()
    next()
}

export async function login(email, password) {
    let result = await post(host + '/users/login', { email, password })
    setUserData(result)
    return result
}

export async function register(email, password) {
    let result = await post(host + '/users/register', { email, password })
    setUserData(result)
    return result
}

export function logout() {
    let result = get(host + '/users/logout')
    clearUserData()
    return result
}

export async function onLogout() {
    await logout()
    setUserNav()
    page.redirect('/')
}

document.getElementById('logoutBtn').addEventListener('click', onLogout)

export async function getAllPets() {
    return await get(host + '/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getPetById(id) {
    return await get(host + `/data/pets/${id}`);
}

export async function createPet(listing) {
    return await post(host + '/data/pets', listing);
}

export async function editPetById(id, listing) {
    return await put(host + `/data/pets/${id}`, listing);
}

export async function deletePetById(id) {
    return await del(host + `/data/pets/${id}`)
}

export async function getMyPet(userId) {
    return await get(host + `/data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function donationPet(petId) {
    return await post(host + `/data/donation`, petId);
}

export async function getTotalDonationCount(petId) {
    return await get(host + `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}

export async function didUserDonation(petId, userId) {
    return await get(host + `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}