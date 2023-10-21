
let cart = []

class Pizza {
    constructor() {
        this.size = 'large'
        this.toppings = {
            anchovies: false,
            bacon: false,
            ham: false,
            mushroom: false,
            olives: false,
            onions: false,
            pepperoni: false,
            peppers: false,
            pineapple: false,
            sausage: false
        }
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
        console.log('removed')
    }
    
    toggleTopping(toppingName) {
        if (toppingName in this.toppings) {
            this.toppings[toppingName] = !this.toppings[toppingName]
        } else {
            console.log(`Topping '${toppingName}' does not exist.`)
        }
    }

    changeSize(size) {
        this.size = size
    }

    calculatePrice() {
        const basePrice = {
            small: 6.99,
            medium: 8.99,
            large: 11.99
        }[this.size] || 0
    
        const includedToppings = {
            small: 2,
            medium: 3,
            large: 5
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