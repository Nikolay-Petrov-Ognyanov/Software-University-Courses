function solve(input) {
    let heroes = {}
    let numberOfHeroes = Number(input.shift())
    let heroesinfo = input.splice(0, numberOfHeroes)
    for (let i = 0; i < heroesinfo.length; i++) {
        let tokens = heroesinfo[i].split(" ")
        let name = tokens[0]
        let hp = Number(tokens[1])
        let mp = Number(tokens[2])
        heroes[name] = [hp, mp]
    }
    for (let line of input) {
        if (line === 'End') {
            break
        } else {
            let tokens = line.split(" - ")
            let command = tokens[0]
            let heroName = tokens[1]
            switch (command) {
                case 'CastSpell':
                    let manaCost = Number(tokens[2])
                    let spellName = tokens[3]
                    for (let name in heroes) {
                        let hp = Number(heroes[name][0])
                        let mp = Number(heroes[name][1])
                        if (name === heroName) {
                            if (mp >= manaCost) {
                                mp -= manaCost
                                heroes[name] = [hp, mp]
                                console.log(`${heroName} has successfully cast ${spellName} and now has ${mp} MP!`)
                            } else {
                                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                            }
                        }
                    }
                    break
                case 'TakeDamage':
                    let damage = Number(tokens[2])
                    let attacker = tokens[3]
                    for (let name in heroes) {
                        let hp = Number(heroes[name][0])
                        let mp = Number(heroes[name][1])
                        if (name === heroName) {
                            if (hp >= damage) {
                                hp -= damage
                                heroes[name] = [hp, mp]
                                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hp} HP left!`)
                            } else {
                                delete heroes[name]
                                console.log(`${heroName} has been killed by ${attacker}!`)
                            }
                        }
                    }
                    break
                case 'Recharge':
                    let mpAmount = Number(tokens[2])
                    for (let name in heroes) {
                        let hp = Number(heroes[name][0])
                        let mp = Number(heroes[name][1])
                        if (name === heroName) {
                            if (mp + mpAmount >= 200) {
                                mpAmount = 200 - mp
                            }
                            mp += mpAmount
                            heroes[name] = [hp, mp]
                            console.log(`${heroName} recharged for ${mpAmount} MP!`)
                        }
                    }
                    break
                case 'Heal':
                    let hpAmount = Number(tokens[2])
                    for (let name in heroes) {
                        let hp = Number(heroes[name][0])
                        let mp = Number(heroes[name][1])
                        if (name === heroName) {
                            if (hp + hpAmount >= 100) {
                                hpAmount = 100 - hp
                            }
                            hp += hpAmount
                            heroes[name] = [hp, mp]
                            console.log(`${heroName} healed for ${hpAmount} HP!`)
                        }
                    }
                    break
            }
        }
    }
    for (let name in heroes) {
        console.log(`${name}`)
        console.log(`  HP: ${heroes[name][0]}`)
        console.log(`  MP: ${heroes[name][1]}`)
    }
}
solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])