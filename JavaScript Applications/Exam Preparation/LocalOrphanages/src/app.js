import page from '../../node_modules/page/page.mjs'
import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { getUserData, get, clearUserData } from "./api/api.js"
import { dashboardView, getAllPosts } from "./views/dashboard.js"
import { loginView } from "./views/login.js"
import { registerView } from "./views/register.js"
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'

function decorateContext(context, next) {
    context.render = (template) => render(template, main)
    context.updateNav = updateNav
    next()
}

let main = document.querySelector('#main-content')

// function renderMain(templateResult) {
//     render(templateResult, main)
// }

function updateNav() {
    let userData = getUserData()

    if (userData) {
        document.getElementById('user').style.display = 'block'
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'block'
    }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    get('/users/logout')
    clearUserData()
    updateNav()
    page.redirect('/')
})


page(decorateContext)

page('/', dashboardView)
page('/register', registerView)
page('/login', loginView)
page('/create', createView)
page('/data/posts/:id', detailsView)
updateNav()

page.start()