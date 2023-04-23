function solve(input) {
    let garages = {};
    for (let info of input) {
        let [garage, rest] = info.split(' - ');
        let pairs = rest.split(', ');
        let features = {};
        for (let curr of pairs) {
            let [key, value] = curr.split(': ');
            features[key] = value;
        }
        if (garages.hasOwnProperty(garage) === false) {
            garages[garage] = [];
        }
        garages[garage].push(features);
    }
    for (let key in garages) {
        console.log(`Garage № ${key}`);
        for (let curr of garages[key]) {
            let i = 1;
            let result = '';
            for (let key in curr) {
                if (i == 1) {
                    result += `--- ${key} - ${curr[key]}`;
                } else {
                    result += `, ${key} - ${curr[key]}`;
                }
                i++;
            }
            console.log(result);
        }
    }
}
solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])