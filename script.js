// домашка 2

// --------------------- Задание 1

/*
const exchangeRates = 0.92;
function currencyConverter(currency) {
    let result = (currency * exchangeRates).toFixed(2);
    console.log(`Вы получите ${result} евро!`);
    return result;
}

currencyConverter(22);



// -----------------------  Задание 2

/*
let counter = 0;
let i = 1000;

while (i >= 50) {
    i = (i / 2);
    counter++;
}

console.log(`Остаток: ${i}  и кол-во делений: ${counter}`);
*/

// --------------------  Задание 3

/*
let sum = 0;

for(let i = 0; i <= 100; i++) {
    sum += i;
}

alert(sum);
*/

// ------------------- Задание 4

/*
const ourYear = 2024;
let yearOfBirth = +prompt('Введите год своего рождения:');
let age = 0;

for (let i = yearOfBirth; i <= ourYear; i++) {
    console.log(`В ${yearOfBirth} вам ${age} год`);
    age++;
    yearOfBirth++;
}
*/

// ------------------------ Задание 5

let sum = +prompt('Введите сумму в кошельке:');
let chocolateSum = +prompt('Введите сумму одной шоколадки:');

let amountOfChocolate = 0;

for (let i = sum; i >= chocolateSum; i--) {
    sum -= amountOfChocolate;
    amountOfChocolate++;
}

console.log(`Вы купите ${amountOfChocolate} шоколадок и у вас останется ${sum} денег`)