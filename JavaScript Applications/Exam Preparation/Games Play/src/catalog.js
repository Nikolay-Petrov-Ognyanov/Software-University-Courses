import { html } from '../node_modules/lit-html/lit-html.js'

export let catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${games.length == 0 ? 
        html`<h3 class="no-articles">No articles yet</h3>`: 
        games.map(gameCard)}
</section>`

let gameCard = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src="${game.imageUrl}">
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/catalog/${game._id}" class="details-button">Description</a>
    </div>

</div>`