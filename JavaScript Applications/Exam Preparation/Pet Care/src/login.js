import { html, render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { login, setUserNav } from './app.js'

let loginTemplate = (onSubmit) => html`
<section id="loginPage">
    <form @submit=${onSubmit} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>
`

export async function loginView(context) {
    context.render(loginTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault()
        let formData = new FormData(event.target)
        let email = formData.get('email').trim()
        let password = formData.get('password').trim()

        if (email == '' || password == '') {
            return alert('All fields are required!')
        } else {
            await login(email, password)
            event.target.reset()
            setUserNav()
            page.redirect('/')
        }
    }
}