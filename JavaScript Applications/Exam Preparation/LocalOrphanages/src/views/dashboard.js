import { html, render } from "../../node_modules/lit-html/lit-html.js"
import { get } from "../api/api.js"

let dashboardTemplate = (posts) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
        ${posts.length == 0
        ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
        : posts.map(post => html`
        <div class="post">
            <h2 class="post-title">${post.title}</h2>
            <img class="post-image" src=${post.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href='/details/${post._id}' class="details-btn btn">Details</a>
            </div>
        </div>
        `)}
    </div>
</section>`

export async function dashboardView(context) {
    let posts = await getAllPosts()

    context.render(dashboardTemplate(posts))
}

export function getAllPosts() {
    return get('/data/posts?sortBy=_createdOn%20desc')
}