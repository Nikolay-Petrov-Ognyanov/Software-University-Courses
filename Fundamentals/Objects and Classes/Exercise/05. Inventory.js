function solve(input) {
    let heroes = []
    for (let line of input) {
        line = line.split(" / ")
        let currentHeroName = line[0]
        let currentHeroLevel = line[1]
        let currentHeroItems = line[2].split(", ").join(", ")
        let currentHero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        }
        heroes.push(currentHero)
    }
    console.log(heroes[0])
    heroes.sort((a, b) => a.level - b.level)
    for (let hero of heroes) {
        // console.log(`Hero: ${hero.name}`)
        // console.log(`level => ${hero.level}`)
        // console.log(`items => ${hero.items}`)
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)