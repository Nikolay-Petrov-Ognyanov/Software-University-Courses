function solve(year, month, day) {
    if (year % 4 === 0) {
        if (month === 1 && day === 31) {
            month = 2, day = 1
        } else if (month === 2 && day === 29) {
            month = 3, day = 1
        } else if (month === 3 && day === 31) {
            month = 4, day = 1
        } else if (month === 4 && day === 30) {
            month = 5, day = 1
        } else if (month === 5 && day === 31) {
            month = 6, day = 1
        } else if (month === 6 && day === 30) {
            month = 7, day = 1
        } else if (month === 7 && day === 31) {
            month = 8, day = 1
        } else if (month === 8 && day === 31) {
            month = 9, day = 1
        } else if (month === 9 && day === 30) {
            month = 10, day = 1
        } else if (month === 10 && day === 31) {
            month = 11, day = 1
        } else if (month === 11 && day === 30) {
            month = 12, day = 1
        } else if (month === 12 && day === 31) {
            year = year + 1, month = 1, day = 1
        } else {
            day += 1
        }
    } else {
        if (month === 1 && day === 31) {
            month = 2, day = 1
        } else if (month === 2 && day === 28) {
            month = 3, day = 1
        } else if (month === 3 && day === 31) {
            month = 4, day = 1
        } else if (month === 4 && day === 30) {
            month = 5, day = 1
        } else if (month === 5 && day === 31) {
            month = 6, day = 1
        } else if (month === 6 && day === 30) {
            month = 7, day = 1
        } else if (month === 7 && day === 31) {
            month = 8, day = 1
        } else if (month === 8 && day === 31) {
            month = 9, day = 1
        } else if (month === 9 && day === 30) {
            month = 10, day = 1
        } else if (month === 10 && day === 31) {
            month = 11, day = 1
        } else if (month === 11 && day === 30) {
            month = 12, day = 1
        } else if (month === 12 && day === 31) {
            year = year + 1, month = 1, day = 1
        } else {
            day += 1
        }
    }
    console.log(`${year}-${month}-${day}`)
}
solve(2001, 2, 28)