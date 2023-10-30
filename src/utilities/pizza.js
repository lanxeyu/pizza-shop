class Pizza {
    constructor() {
        this.name = this.generateRandomName();
        this.size = 'Medium';
        this.toppings = [];
        this.price = this.calculatePrice();
    }

    generateRandomName() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomName = '';
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomName += characters.charAt(randomIndex);
        }
        return randomName;
    }

    calculatePrice() {
        const basePrice = {
            Small: 6.99,
            Medium: 8.99,
            Large: 11.99
        }[this.size] || 0
    
        const includedToppings = {
            Small: 2,
            Medium: 3,
            Large: 5
        }[this.size] || 0
    
        const selectedToppingsCount = Object.values(this.toppings).filter(topping => topping).length
        const extraToppingCount = Math.max(selectedToppingsCount - includedToppings, 0)
    
        const extraToppingPrice = 1.49 * extraToppingCount
    
        const totalPrice = (basePrice + extraToppingPrice).toFixed(2)

        return totalPrice
    }
}

export { Pizza }