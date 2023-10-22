let cart = []

class Pizza {
    constructor() {
        this.size = 'Medium'
        this.toppings = {
            anchovies: false,
            bacon: false,
            ham: false,
            mushrooms: false,
            olives: false,
            onions: false,
            pepperoni: false,
            peppers: false,
            pineapple: false,
            sausage: false
        }
        this.name = this.generateRandomName()
        this.addToCart()
    }

    addToCart() {
        cart.push(this)
    }

    removeFromCart() {
        const index = cart.indexOf(this)
        if (index !== -1) {
            cart.splice(index, 1)
        }
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
    
    changeSize(size) {
        this.size = size
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
    
        return basePrice + extraToppingPrice
    }
    
    getPizzaDetails() {
        const selectedToppings = Object.keys(this.toppings).filter(topping => this.toppings[topping])

        return {
            size: this.size,
            toppings: selectedToppings,
            pizzaPrice: this.calculatePrice().toFixed(2)
        }
    }
}

export { Pizza }