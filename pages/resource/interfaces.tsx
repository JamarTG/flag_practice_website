interface Country {
    id:string
    name:string,
    flag:string
}

interface Progress {
    correct:number,
    total:number,
    percCorrect:number,
    
}

export type {Progress , Country}