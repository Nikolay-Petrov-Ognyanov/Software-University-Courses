import { html } from '../node_modules/lit-html/lit-html.js'

export let detailsTemplate = (game, isOwner, onDelete, onSubmitAddComment, comments, userData) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${game.imageUrl}" />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>


        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0
                ? html`<p class="no-comment">No comments.</p>`
                : html`<ul>${comments.map(commentCard)}</ul>`}
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        <div class="buttons">
            ${isOwner
            ?
            html`
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>`
            :
            ''}  
        </div>
    </div>
    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${userData? isOwner? '' : html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onSubmitAddComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>
    ` : ''}
</section>`

let commentCard = (comment) => html`
<li class="comment">
    <p>${comment.comment}</p>
</li>`