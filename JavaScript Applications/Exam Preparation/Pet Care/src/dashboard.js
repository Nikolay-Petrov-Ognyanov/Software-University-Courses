import { html, render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { getAllPets } from './app.js'

let dashboardTemplate = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${pets.length == 0
        ? 
            html`
        <div>
            <p class="no-pets">No pets in dashboard</p>
        </div>`
        : pets.map(pet => html`
        <div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src="${pet.image}">
            </article>
            <h2 class="name">${pet.name}</h2>
            <h3 class="breed">${pet.breed}</h3>
            <div class="action">
                <a class="btn" href="${pet._id}">Details</a>
            </div>
        </div>`)
        }
    </div>
</section>`

export async function dashboardView(context) {
    let pets = await getAllPets()
    console.log(pets)
    context.render(dashboardTemplate(pets))
}