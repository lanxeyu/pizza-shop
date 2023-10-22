

function generateRandom8DigitNumber() {
    const min = 10000000; 
    const max = 99999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  

class Order {
    constructor(cart, notes) {
        this.cart = cart || [];
        this.notes = notes;
        this.orderNumber = this.getOrderNumber();
    }

    getOrderNumber() {

    }
}

export { Order }
export {generateRandom8DigitNumber}
