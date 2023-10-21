import { useState } from 'react';
import { Pizza } from './lib/pizza';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

function Cart() {
  const [cart, setCart] = useState([]);

  const handleAddPizza = () => {
    const pizza = new Pizza();
    setCart((prevCart) => [...prevCart, pizza]);
  }

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  }

  return (
    <>
      <Button onClick={handleAddPizza} variant="primary">
        Add Pizza
      </Button>
      <div>
        <h2>Cart:</h2>
        {cart.map((pizza, index) => (
          <div key={index}>

            <h3>Pizza {index + 1}</h3>

            <p>Size: {pizza.size}</p>

            <p>Toppings: {pizza.getPizzaDetails().toppings.join(', ')}</p>

            <p>Price: £{pizza.getPizzaDetails().pizzaPrice}</p>
            <CloseButton onClick={() => removeFromCart(index)} />
          </div>
          
        ))}
      </div>
    </>
  );
}

export default Cart;
