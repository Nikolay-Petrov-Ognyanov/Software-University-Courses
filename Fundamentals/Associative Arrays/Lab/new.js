function solve(input){
    let wordmap = new Map();
    for (let word of input) {      
        if(wordmap.has(word)){
            let sum = wordmap.get(word) + 1
            wordmap.set(word, sum) 
        }else{         
            wordmap.set(word, 1)          
        }
    }
    let sorted = Array.from(wordmap.entries()).
    sort((a, b) => b[1] - a[1]) 
    for (let word of sorted) {
        console.log(`${word[0]} -> ${word[1]} times`);     
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])