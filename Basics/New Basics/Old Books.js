function oldBooks(input) {
  let searchedBook = input[0]
  let index = 1
  let booksCounter = 0

  while (index <= input.length) {
    if (input[index] === "No More Books") {
      console.log(`The book you search is not here!`)
      console.log(`You checked ${booksCounter} books.`)

      break
    }

    if (input[index] === searchedBook) {
      console.log(`You checked ${booksCounter} books and found it.`)

      break
    }

    booksCounter++
    index++
  }
}

oldBooks(["Troy",

  "Stronger",

  "Life Style",

  "Troy"])