interface Shape {
    colour: string;
}

interface Square extends Shape {
    sideLength: number;
}

//todo: initilizing a variable with a type
let square = {} as Square;

square.colour = 'orange';
square.sideLength = 12;

console.log(square);

//todo: An interface can extend multiple interfaces
interface PenStroke {
    penWidth: number;
}

interface CustomSquare extends Square, PenStroke {
    sideLength: number;
}

let mySquare = {} as CustomSquare;
mySquare.sideLength = 1;

console.log(mySquare);
