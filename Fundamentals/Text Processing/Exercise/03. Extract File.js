function solve(input) {
    let arr = input.split("\\")
    let tokens = arr[arr.length - 1].split(".")
    let fileExtension = tokens.pop()
    let fileName = tokens.join(".")
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`)
}
solve('C:\\Internal\\training-internal\\Template.pptx')