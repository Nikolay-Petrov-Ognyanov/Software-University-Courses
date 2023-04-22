function OnTimefortheExam(input) {
    let examHour = Number(input[0])
    let examMinute = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMinute = Number(input[3])

    let exam = examHour * 60 + examMinute
    let arrival = arrivalHour * 60 + arrivalMinute

    if (arrival > exam) {
        console.log(`Late`)
    } else if (arrival >= exam - 30 && arrival <= exam) {
        console.log(`On time`)
    } else if (arrival < exam - 30) {
        console.log(`Early`)
    }

    if (arrival <= exam - 1) {
        if (Math.floor((exam - arrival) / 60) == 0) {
            console.log(`${exam - arrival} minutes before the start`)
        } else {
            if ((exam - arrival) % 60 < 10) {
                console.log(`${Math.floor((exam - arrival) / 60)}:0${(exam - arrival) % 60} hours before the start`)
            } else {
                console.log(`${Math.floor((exam - arrival) / 60)}:${(exam - arrival) % 60} hours before the start`)
            }
        }
    } else if (arrival >= exam + 1) {
        if (Math.floor((arrival - exam) / 60) == 0) {
            console.log(`${arrival - exam} minutes after the start`)
        } else {
            if ((arrival - exam) % 60 < 10) {
                console.log(`${Math.floor((arrival - exam) / 60)}:0${(arrival - exam) % 60} hours after the start`)
            } else {
                console.log(`${Math.floor((arrival - exam) / 60)}:${(arrival - exam) % 60} hours after the start`)
            }
        }
    }
}

OnTimefortheExam(["16",

    "00",

    "15",

    "00"]) 