function solve(input) {
    let account = input[0].split(' ')
    input.shift()
    for (i = 0; i < input.length; i++) {
        let wordarr = input[i].split(' ')
        if (wordarr[0] === 'Play!') {
            break
        } else {
            if (wordarr[0] === 'Install' && !account.includes(wordarr[1])) {
                account.push(wordarr[1])
            } else if (wordarr[0] === 'Uninstall' && account.includes(wordarr[1])) {
                for (j = 0; j < account.length; j++) {
                    if (account[j] === wordarr[1]) {
                        account.splice(j, 1)
                    }
                }
            } else if (wordarr[0] === 'Update' && account.includes(wordarr[1])) {
                for (k = 0; k < account.length; k++) {
                                            if (account[k] === wordarr[1]) {
                        account.splice(k, 1)
                    }
                }
                account.push(wordarr[1])
            } else if (wordarr[0] === 'Expansion') {
                let splitted = wordarr[1].split("-")
                let joined = splitted.join(":")
                for (a = 0; a < account.length; a++) {
                    for (s = 0; s < splitted.length; s++) {
                        if (account[a] === splitted[s]) {
                            account.splice(a + 1, 0, joined)
                        }
                    }
                }
            }
        }
    }
    console.log(account.join(" "))
}
solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)