import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'

import { homeTemplate } from './home.js'
import { loginTemplate } from './login.js'
import { registerTemplate } from './register.js'
import { createTemplate } from './create.js'
import { catalogTemplate } from './catalog.js'
import { detailsTemplate } from './details.js'
import { editTemplate } from './edit.js'
// import { profileTemplate } from './profile.js'

let host = 'http://localhost:3030'
let main = document.querySelector('main')

page(decorateContext)

page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/catalog', catalogView)
page('/catalog/:id', detailsView)
page('/edit/:id', editView)
// page('/profile', profileView)

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
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
        document.getElementById('user').style.display = 'block'
        document.getElementById('guest').style.display = 'none'
        //document.querySelector('.user span').textContent = `Welcome, ${userData.email}`

    } else {
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'block'
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

export async function getAllgames() {
    return get('/data/games?sortBy=_createdOn%20desc')
}

export function getNewgames() {
    return get('/data/games?sortBy=_createdOn%20desc&distinct=category')
}

export async function getgamesByUser(userId) {
    return get(`/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function getgameById(id) {
    return get('/data/games/' + id)
}

export async function creategame(game) {
    return post('/data/games', game)
}

export async function updategame(id, game) {
    return put('/data/games/' + id, game)
}

export async function deletegame(id) {
    return del('/data/games/' + id)
}

export async function getLikesBygameId(gameId) {
    return get(`/data/likes?where=gameId%3D%22${gameId}%22&distinct=_ownerId&count`)
}

export async function getMyLikesBygameId(gameId, userId) {
    return get(`/data/likes?where=gameId%3D%22${gameId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function likegame(gameId) {
    return post('/data/likes', {gameId})
}

async function addComment(gameId, comment) {
    return post('/data/comments/', {gameId, comment})
}

export async function getComments(gameId) {
    return get(`/data/comments?where=gameId%3D%22${gameId}%22`)
}

//////////////////////////////////////////////////////////////////////////////////////////

export async function login(email, password) {
    let result = await post('/users/login', { email, password })
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
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
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
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
        let password = formData.get('password').trim()

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
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
        let repeatPassword = formData.get('confirm-password')
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
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
    let games = await getNewgames()
    
    console.log(games)
    context.render(homeTemplate(games))
}

export function createView(context) {
    context.render(createTemplate(onSubmitCreate))

    async function onSubmitCreate(event) {
        event.preventDefault()

        let formData = new FormData(event.target)
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
        let title = formData.get('title').trim()
        let category = formData.get('category').trim()
        let maxLevel = formData.get('maxLevel').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let summary = formData.get('summary').trim()
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
        if (!title || !category || !maxLevel || !imageUrl || !summary) {
            return alert('All fields are required!')
        } else {
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
            await creategame({
                title,
                category,
                maxLevel,
                imageUrl,
                summary
            })
            context.page.redirect('/')
        }
    }
}

export async function profileView(context) {
    let userData = getUserData()
    let games = await getgamesByUser(userData.id)

    context.render(profileTemplate(games))
}

export async function catalogView(context) {
    let games = await getAllgames()

    console.log(games)
    context.render(catalogTemplate(games))
}

export async function detailsView(context) {
    let game = await getgameById(context.params.id)
    let userData = getUserData()
    let isOwner = userData?.id == game._ownerId
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
    let comments = await getComments(context.params.id)
    console.log(comments)
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
    context.render(detailsTemplate(game, isOwner, onDelete, onSubmitAddComment, comments, userData))

    async function onDelete() {
        let choice = confirm('Are you sure you want to delete this game?')

        if (choice) {
            await deletegame(context.params.id)
            context.page.redirect('/catalog')
        }
    }
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
    async function onSubmitAddComment(event) {
        event.preventDefault()
    
        let formData = new FormData(event.target)
        let comment = formData.get('comment').trim()

        if (!comment) {
            return alert('Type in something!')
        } else {
            let gameId = context.params.id
            
            await addComment(gameId, comment)
            event.target.reset()
            context.page.redirect('/catalog/' + context.params.id)
        }
    }
}

export async function editView(context) {
    let game = await getgameById(context.params.id)

    context.render(editTemplate(game, onSubmitEdit))

    async function onSubmitEdit(event) {
        event.preventDefault()

        let formData = new FormData(event.target)
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
        let game = {
            title: formData.get('title').trim(),
            category: formData.get('category').trim(),
            maxLevel: formData.get('maxLevel').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            summary: formData.get('summary').trim()
        }
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
        if (!game.title || !game.category || !game.maxLevel || !game.imageUrl || !game.summary) {
            return alert('All fields are required!')
        } else {
            await updategame(context.params.id, game)
            event.target.reset()
            context.page.redirect('/catalog/' + context.params.id)
        }
    }
}