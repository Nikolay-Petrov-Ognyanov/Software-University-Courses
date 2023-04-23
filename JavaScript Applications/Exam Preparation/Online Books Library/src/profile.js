import { html } from '../node_modules/lit-html/lit-html.js'
import { getbooksByUser, getUserData } from './app.js'
import { bookCard } from './home.js'

export let profileTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length == 0
    ? html`<p class="no-books">No books in database!</p>`
    : html`<ul class="my-books-list"> ${books.map(bookCard)} </ul>`}
</section>`