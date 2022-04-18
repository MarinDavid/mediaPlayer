//Bolean
let muted: boolean = true;
muted = false;

//Números
let age = 6
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//String
let nombre: string = "David";
let saludo = `Me llamo ${nombre}`;

//Arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
    // people.push("9000");

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push("Ricadro");
peopleAndNumbers.push(9000);
console.log(peopleAndNumbers);

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = "Joker";
comodin = { type: 'Wildcard'};

//Object
let someObject: object = {type: 'Wildcard'};

//Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4,6);

function createAdder(a: number): (number)=> number {
    return function(b: number){
        return b + a;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`;
}
const david = fullName('David');
console.log(david);

//Interfaces
enum Color{
    Amarillo = "Amarillo",
    Rosa = "Rosa"
}

interface Rectangulo{
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.Rosa
}

function area(r: Rectangulo){
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function(){
    return this.color? `Un rectángulo ${this.color}` : `Un rectángulo`;
}

console.log(rect.toString());
