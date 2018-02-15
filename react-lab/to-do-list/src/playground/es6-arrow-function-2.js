// arguments object 

const multiplier = {
    numbers: [3, 5],
    multiplyBy : 5,

    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};

console.log(multiplier.multiply());
