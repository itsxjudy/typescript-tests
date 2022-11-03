const throwDice = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min); 
}

console.log(throwDice(1, 6));