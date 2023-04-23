import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'
// import { loginTemplate } from './login.js'
// import { registerTemplate } from './register.js'
// import { homeTemplate } from './home.js'
// import { createTemplate } from './create.js'
// import { profileTemplate } from './profile.js'
// import { detailsView } from './details.js'

let host = 'http://localhost:3030'
let main = document.querySelector('main')

page(decorateContext)

// page('/', homeView)
// page('/login', loginView)
// page('/register', registerView)
// page('/create', createView)
// page('/profile', profileView)
// page('/details/:id', detailsView)

updateNav()
page.start()

document.getElementById('logoutBtn').addEventListener('click', () => {
    get('/users/logout')
    clearUserData()
    updateNav()
    page.redirect('/')
})

function updateNav() {
    let userData = getUserData()

    if (userData) {
        document.querySelector('.user').style.display = 'block'
        document.querySelector('.guest').style.display = 'none'
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`

    } else {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'block'
    }
}

function renderMain(template) {
    render(template, main)
}

function decorateContext(context, next) {
    context.render = renderMain
    context.updateNav = updateNav
    next()
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

        if (response.ok === false) {
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

//////////////////////////////////////////////////////////////////////////////////////////

export async function getAllbooks() {
    return get('/data/books?sortBy=_createdOn%20desc')
}

export async function getbooksByUser(userId) {
    return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getbookById(id) {
    return get('/data/books/' + id)
}

export async function createbook(book) {
    return post('/data/books', book)
}

export async function updatebook(id, book) {
    return put('/data/books/' + id, book)
}

export async function deletebook(id) {
    return del('/data/books/' + id)
}

export async function getLikesBybookId(bookId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function getMyLikesBybookId(bookId, userId) {
    return get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function likebook(bookId) {
    return post('/data/likes', {
        bookId
    })
}

//////////////////////////////////////////////////////////////////////////////////////////

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

export async function register(email, password) {
    let result = await post('/users/register', { email, password })

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

//////////////////////////////////////////////////////////////////////////////////////////

export function loginView(context) {
    context.render(loginTemplate(onSubmitLogin))

    async function onSubmitLogin(event) {
        event.preventDefault()
        let formData = new FormData(event.target)
        let email = formData.get('email').trim()
        let password = formData.get('password')

        if (!email || !password) {
            return alert('All fields are required!')
        } else {
            await login(email, password)
            context.updateNav()
            context.page.redirect('/')
        }
    }
}

export function registerView(context) {
    context.render(registerTemplate(onSubmitRegister))

    async function onSubmitRegister(event) {
        event.preventDefault()
        let formData = new FormData(event.target)
        let email = formData.get('email')
        let password = formData.get('password')
        let repeatPassword = formData.get('confirm-pass')

        if (!email || !password || !repeatPassword) {
            return alert('All fields are required')
        } else if (repeatPassword != password) {
            return alert('Passwords must match!')
        } else {
            await register(email, password)
            context.updateNav()
            context.page.redirect('/')
        }
    }
}

export async function homeView(context) {
    let books = await getAllbooks()
    context.render(homeTemplate(books))
}

export function createView(context) {
    context.render(createTemplate(onSubmitCreate))

    async function onSubmitCreate(event) {
        event.preventDefault()

        let formData = new FormData(event.target)
        let title = formData.get('title').trim()
        let description = formData.get('description').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let type = formData.get('type').trim()

        if (!title || !description || !imageUrl || !type) {
            return alert('All fields are required!')
        } else {
            await createbook({
                title,
                description,
                imageUrl,
                type
            })
        }

        context.page.redirect('/')
    }
}

export async function profileView(context) {
    let userData = getUserData()
    let books = await getbooksByUser(userData.id)
    context.render(profileTemplate(books))
}