function roomPainting(input) {

    let paintcans = Number(input[0])
    let wallpapers = Number(input[1])
    let glovesprice = Number(input[2])
    let brushpprice = Number(input[3])

    let paintprice = 21.50
    let wallpaperprice = 5.20

    let gloves = Math.ceil(wallpapers * 0.35)
    let brushes = Math.floor(paintcans * 0.48)

    let paintCost = paintcans * paintprice
    let wallpapersCost = wallpapers * wallpaperprice
    let glovesCost = gloves * glovesprice
    let brushCost = brushes * brushpprice
    let totalCost = paintCost + wallpapersCost + glovesCost + brushCost
    let deliveryCost = totalCost / 15

    console.log(`This delivery will cost ${deliveryCost.toFixed(2)} lv.`)
}
roomPainting(["10"
    , "8",
    "2.2",
    "5"
])