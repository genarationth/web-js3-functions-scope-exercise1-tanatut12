
const num1 = 20;
const num2 = 30;

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function devide(num1,num2) {
    return num1 / num2;
}

const sum = add(num1,num2);
console.log(sum);

const sub = subtract(num1,num2);
console.log(sub);

const mul = multiply(num1,num2);
console.log(mul);

const de = devide(num1,num2);
console.log(de);



function inform(firstName, location, hobby) {
    console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);
}

inform('aoun ', 'ramintra ', 'gaming')