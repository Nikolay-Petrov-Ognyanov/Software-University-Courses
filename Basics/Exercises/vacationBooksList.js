function vacationBooksList(input){
    pagesCount = Number(input[0])
    pagesPerHour = Number(input[1])
    daysCount = Number(input[2])
    let hoursCount = Number(pagesCount / pagesPerHour / daysCount)
    console.log(hoursCount)
}
vacationBooksList(["432","15","4"])