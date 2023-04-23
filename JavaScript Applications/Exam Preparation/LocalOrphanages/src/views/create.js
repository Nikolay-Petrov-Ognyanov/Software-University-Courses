import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { post } from '../api/api.js'

let createTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
        <h1 class="title">Create Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>

        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>`

async function createPost(createpost) {
    return post('/data/posts', createpost)
}

export function createView(context) {
    context.render(createTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault()

        let formData = new FormData(event.target)

        let post = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            address: formData.get('address').trim(),
            phone: formData.get('phone').trim()
        }

        if (post.title == '' ||
            post.description == '' ||
            post.imageUrl == '' ||
            post.address == '' ||
            post.phone == '') {
            alert('All fields are required!')
        } else {
            await createPost(post)
            event.target.reset()
            context.page.redirect('/')
        }
    }
}