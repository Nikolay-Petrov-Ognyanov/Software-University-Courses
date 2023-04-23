import { html, render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { register, setUserNav } from './app.js'

let registerTemplate = (onSubmit) => html`
<section id="registerPage">
    <form @submit=${onSubmit} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>`

export async function registerView(context) {
    context.render(registerTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault()
        let formData = new FormData(event.target)
        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        let repeatPassword = formData.get('repeatPassword').trim()

        if (email == '' || password == '') {
            return alert('All fields are required')
        } else if (repeatPassword != password) {
            return alert('Passwords don\'t match')
        } else {
            await register(email, password)
            event.target.reset()
            setUserNav()
            page.redirect('/')
        }
    }
}