function catlife(input) {

    let type = input[0]
    let sex = input[1]
    let age

    switch (sex) {
        case `m`:
            switch (type) {
                case `British Shorthair`: age = 13; break
                case `Siamese`: age = 15; break
                case `Persian`: age = 14; break
                case `Ragdoll`: age = 16; break
                case `American Shorthair`: age = 12; break
                case `Siberian`: age = 11; break
            }
            ; break
        case `f`:
            switch (type) {
                case `British Shorthair`: age = 14; break
                case `Siamese`: age = 16; break
                case `Persian`: age = 15; break
                case `Ragdoll`: age = 17; break
                case `American Shorthair`: age = 13; break
                case `Siberian`: age = 12; break
            }
            ; break
    }

    let humanmonths = age * 12
    let catmonths = humanmonths / 6

    switch (type) {
        case `British Shorthair`:
        case `Siamese`:
        case `Persian`:
        case `Ragdoll`:
        case `American Shorthair`:
        case `Siberian`: console.log(`${catmonths} cat months`); break
        default: console.log(`${type} is invalid cat!`); break
    }
}
catlife([`Siberian`, `f`])