const availableToppings = [
    'Anchovies',
    'Bacon',
    'Ham',
    'Mushrooms',
    'Olives',
    'Onions',
    'Pepperoni',
    'Peppers',
    'Pineapple',
    'Sausage',
];
  

function generateRandom8DigitNumber() {
    const min = 10000000; 
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getCurrentDateTime() {
    const currentDate = new Date();
    const isoFormattedDateTime = currentDate.toISOString();
    return isoFormattedDateTime
}

export { availableToppings, generateRandom8DigitNumber, getCurrentDateTime }