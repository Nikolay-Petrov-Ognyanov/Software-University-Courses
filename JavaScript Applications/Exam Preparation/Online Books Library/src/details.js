import { html } from '../node_modules/lit-html/lit-html.js'
import { deletebook, getbookById, getLikesBybookId, getMyLikesBybookId, getUserData, likebook } from './app.js'

export let detailsTemplate = (book, isOwner, onDelete, likes, showLikeButton, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}/p>
            <p class="img"><img src="${book.imageUrl}"></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${bookControlTemplates(book, isOwner, onDelete)}
                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${likesControlTemplates(showLikeButton, onLike)}
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="../images/heart.png">
                    <span id="total-likes">Likes: ${likes}</span>
                </div>
                <!-- Bonus -->
            </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold,
            bleak place in the long winter months. So when she spots a deer in the forest being pursued by a
            wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and
            killing something so precious comes at a price ...</p>
    </div>
</section>`

export let bookControlTemplates = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
    } else {
        return null
    }
}

export let likesControlTemplates = (showLikeButton, onLike) => {
    if (showLikeButton) {
        return html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
    } else {
        return null
    }
}

export async function detailsView(context) {
    let userData = getUserData()

    let [book, likes, hasLike] = await Promise.all([
        getbookById(context.params.id),
        getLikesBybookId(context.params.id),
        userData ? getMyLikesBybookId(context.params, userData.id) : 0
    ])

    let isOwner = userData && userData.id == book._ownerId
    let showLikeButton = isOwner == false && hasLike == false && userData != null
    context.render(detailsTemplate(book, isOwner, onDelete, likes, showLikeButton, onLike))

    async function onDelete() {
        await deletebook(context.params.id)
        context.page.redirect('/') 
    }   

    async function onLike() {
        await likebook(context.params.id)
        context.page.redirect('/details/' + context.params.id)
    }
}