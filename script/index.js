function isAdult(age) {
    if( isNaN(age) || typeof age !== "number" || age < 0) {
        return null;
    }
    
    return age >= 18;
}

function checkMultiplicity(num1, num2) {
    if( 
        isNaN(num1 - num2) || 
        typeof num1 !== "number" || 
        typeof num2 !== "number"
    ) {
        return null;
    }
    return num1 % num2 === 0 ;
}

function triangle(a, b, c) {
    if( 
        isNaN(a - b - c) || 
        typeof a !== "number" || 
        typeof b !== "number" ||
        typeof c !== "number" ||
        a < 0 ||
        b < 0 ||
        c < 0
    ) {
        return null;
    }

    return a + b > c && a + c > b && b + c > a;
}

function figureArea(type, num1, num2) {
    if( 
        isNaN(num1 - num2) || 
        typeof num1 !== "number" || 
        typeof num2 !== "number" ||
        typeof type !== "string" ||
        num1 < 0 ||
        num2 < 0
    ) {
        return null;
    }

    switch(type) {
        case "rhombus": {
            // num1, num2 - диагонали ромба
            return (1/2)*num1*num2;
        }
        case "cylinder": {
            // num1 - радиус цилиндра
            // num2 - высота цилиндра
            return 2*3,14*num1*(num1 + num2);
        }
        case "triangle": {
            // num1 - основание треугольника
            // num2 - высота треугольника
            return (1/2)*num1*num2;
        }
        case "rectangle": {
            // num1, num2 - стороны прямоугольника
            return num1*num2;
        }
        default: {
            return "Неизвестный тип фигуры";
        }
    }
}

function getPow(num1, num2) {
    if( 
        isNaN(num1 - num2) || 
        typeof num1 !== "number" || 
        typeof num2 !== "number" ||
        num1 < 0 ||
        num2 < 0
    ) {
        return null;
    }

    let value = 1;

    for(let i = 1; i <= num2; i++) {
        value*=num1;
    }

    return value;
}

function simpleNumber(number) {
    if( isNaN(number) || typeof number !== "number" || number <= 1) {
        return null;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return null;
        }
    }

    return "Число простое";
}

// Задание 1
console.log(isAdult(20));
// задание 2
console.log(checkMultiplicity(15, 3));
// задание 3
console.log(triangle(1,2,5));
// задание 4
console.log(figureArea('rectangle', 10, 4000));
// Доп задание 2
console.log(getPow(4, 0));
// Доп задание 1
console.log(simpleNumber(30));
