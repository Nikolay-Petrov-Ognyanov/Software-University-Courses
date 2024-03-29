import { html, render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { createPet, getUserData } from './app.js'

let createTemplate = (onSubmit) => html`
<section id="createPage">
    <form @submit=${onSubmit} class="createForm">
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>
`

export async function createView(context) {
    context.render(createTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault()

        let formData = new FormData(event.target)

        let pet = {
            name: formData.get('name').trim(),
            breed: formData.get('breed').trim(),
            age: formData.get('age').trim(),
            weight: formData.get('weight').trim(),
            image: formData.get('image').trim(),
        }

        if (Object.values(pet).some(value => !value)) {
            return alert('All fields are required!')
        } else {
            await createPet(pet)
            event.target.reset()
            context.page.redirect('/dashboard')
        }
    }
}