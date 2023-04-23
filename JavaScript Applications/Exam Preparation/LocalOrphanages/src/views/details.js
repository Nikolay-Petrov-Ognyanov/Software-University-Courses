import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { del, get, getUserData } from "../api/api.js"

let detailsTemplate = (post, userData, isOwner, onDelete) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${post.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">${post.adress}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                <!--Edit and Delete are only for creator-->
                <div class="btns">
                    ${isOwner ? showButtons() : ''}
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <a href="#" class="donate-btn btn">Donate</a>
                </div>

            </div>
        </div>
    </div>
</section>`

let showButtons = (post) => html`
<a href="/edit/${post.id}" class="edit-btn btn">Edit</a>
<a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>
`

async function onDelete() {
    let confirmed = confirm('Are you sure you want to delete this post?')

    if (confirmed) {
        await deletePostById(id)
        context.page.redirect
    }
}

async function deletePostById(id) {
    return await del(host + `/data/posts/${id}`)
}

export async function getPostById(id) {
    return get('data/posts/' + id)
}

export async function detailsView(context) {
    let post = await getPostById(context.params.id)
    let userData = getUserData()
    let isOwner = userData?.id == post._ownerId

    context.render(detailsTemplate(post, userData, isOwner, onDelete))

    async function deletePost(id) {
        return del('/data/posts' + id)
    }

    async function onDelete() {
        let choice = confirm('Are you sure you want to delete this post?')

        if (choice) {
            await deletePost(context.params.id)
            context.page.redirect('/')
        }
    }
}