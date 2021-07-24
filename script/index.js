function isAdult(age) {
    if( isNaN(age) || typeof age !== "number") {
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

function isValidTriangle(a, b, c) {
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

function getRhombusArea(diagonal1, diagonal2) {
    if( 
        isNaN(diagonal1 - diagonal2) || 
        typeof diagonal1 !== "number" || 
        typeof diagonal2 !== "number" ||
        diagonal1 < 0 ||
        diagonal2 < 0
    ) {
        return null;
    }

    return (1/2)*diagonal1*diagonal2;
}

function getCylinderVolume(radius, height) {
    if( 
        isNaN(radius - height) || 
        typeof radius !== "number" || 
        typeof height !== "number" ||
        radius < 0 ||
        height < 0
    ) {
        return null;
    }
    return 2*3,14*radius*(radius + height);
}

function getTriangleArea(base, height) {
    if( 
        isNaN(base - height) || 
        typeof base !== "number" || 
        typeof height !== "number" ||
        base < 0 ||
        height < 0
    ) {
        return null;
    }
    return (1/2)*base*height;
}

function getRectangleArea (side1, side2) {
    if( 
        isNaN(side1 - side2) || 
        typeof side1 !== "number" || 
        typeof side2 !== "number" ||
        side1 < 0 ||
        side2 < 0
    ) {
        return null;
    }

    return side1*side2;
}

function getPow(number, degree) {
    if (
        isNaN(number - degree) || 
        typeof number !== "number" || 
        typeof degree !== "number"
    ) {
        return null;
    }

    let value = 1;

    if (number === 0 && degree < 0) {
        return Infinity;
    }

    if (degree > 0) {
        for(let i = 1; i <= degree; i++) {
            value*=number;
        }
    }

    if (degree < 0) {
        for(let i = 1; i <= degree*(-1); i++) {
            value*=number;
        }
        value=1/value;
    }

    return value;
}

function isPrimeNumber(number) {
    if( isNaN(number) || typeof number !== "number" || number <= 1) {
        return null;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

