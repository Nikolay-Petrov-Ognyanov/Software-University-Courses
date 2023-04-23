function areaOfFigures(input){
    let figure = String(input[0])
    let size = Number(input[1])
    if (figure === "square"){
        let a = Number(input[1])
        let area = Number(a * a)
        console.log(area.toFixed(3))
    }else if(figure === "rectangle"){
        let a = Number(input[1])
        let b = Number(input[2])
        let area = Number(a * b)
        console.log(area.toFixed(3))
    }else if(figure === "circle"){
        let r = Number(input[1])
        let area =  Number(Math.PI * r * r)
        console.log(area.toFixed(3))
    }else if(figure === "triangle"){
        let c = Number(input[1])
        let h = Number(input[2])
        let area = Number(0.5 * c * h)
        console.log(area.toFixed(3))
    }
}
areaOfFigures(["triangle", "4.5", "20"])