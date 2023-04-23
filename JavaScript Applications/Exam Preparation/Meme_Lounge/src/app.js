import { logout } from './api/users.js'
import { page, render } from './lib.js'
import { getUserData } from './api/api.js'
import { catalogView } from './views/catalog.js'
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'
import { homeView } from './views/home.js'
import { loginView } from './views/login.js'
import { registerView } from './views/register.js'
import { editView } from './views/edit.js'
import { profileView } from './views/profile.js'

let main = document.querySelector('main')

page(decorateContext)
page('/', homeView)
page('/memes', catalogView)
page('/memes/:id', detailsView)
page('/edit/:id', editView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/profile', profileView)

updateNav()
page.start()

function decorateContext(context, next) {
    context.render = renderMain
    context.updateNav = updateNav
    next()
}

function renderMain(templateResult) {
    render(templateResult, main)
}

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

document.getElementById('logoutBtn').addEventListener('click', onLogout)

function onLogout() {
    logout()
    updateNav()
    page.redirect('/')
}