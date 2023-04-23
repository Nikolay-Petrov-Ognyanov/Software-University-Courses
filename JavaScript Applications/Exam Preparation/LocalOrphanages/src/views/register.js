import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { register } from "../api/api.js"

let registerTemplate = (onSubmit) => html`
<section id="register-page" class="auth">
    <form @submit=${onSubmit} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>`

export function registerView(context) {
    context.render(registerTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault()

        let formData = new FormData(event.target)
        let email = formData.get('email')
        let password = formData.get('password')
        let repeatPassword = formData.get('repeatPassword')

        console.log(email, password, repeatPassword)

        if (email == '' || password == '' || repeatPassword == '') {
            alert('All fields are required!')
        } else if (repeatPassword != password) {
            alert("Passwords don't match!")
        } else {
            await register(email, password)
            event.target.reset()
            context.updateNav()
            context.page.redirect('/')
        }
    }
}