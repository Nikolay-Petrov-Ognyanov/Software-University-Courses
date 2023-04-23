import { deleteMeme, getMemeById } from '../api/memes.js'
import { html } from '../lib.js'
import { getUserData } from '../api/api.js'

let detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1> 
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${isOwner
            ?
            html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` 
            :
            ''}
        </div>
    </div>
</section>`

export async function detailsView(context) {
    let meme = await getMemeById(context.params.id)
    let userData = getUserData()
    let isOwner = userData?.id == meme._ownerId
    
    context.render(detailsTemplate(meme, isOwner, onDelete))

    async function onDelete() {
        let choice = confirm('Are you sure you want to delete this meme?')

        if (choice) {
            await deleteMeme(context.params.id)
            context.page.redirect('/memes')
        }
    }
}