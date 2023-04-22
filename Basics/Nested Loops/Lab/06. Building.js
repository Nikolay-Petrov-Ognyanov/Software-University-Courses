function building(input) {
  let floors = Number(input[0])
  let rooms = Number(input[1])
  let arr = []

  for (let floor = floors; floor > 0; floor--) {
    for (let room = 0; room < rooms; room++) {
      if (floor === floors) {
        arr.push(`L${floor}${room}`)
      } else if (floor % 2 === 0) {
        arr.push(`O${floor}${room}`)
      } else if (floor % 2 !== 0) {
        arr.push(`A${floor}${room}`)
      }
    }

    console.log(arr.join(" "))
    
    arr = []
  }
}

building(["6", "4"]) 