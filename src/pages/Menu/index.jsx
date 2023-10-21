
import { useState } from 'react';
import { Pizza } from './lib/pizza';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { SizeSelector, ToppingsSelector } from '../../components';

function Menu() {
  const [cart, setCart] = useState([]);

  const handleAddPizza = () => {
    const pizza = new Pizza();
    setCart([...cart, pizza]);
  }

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  }

  return (
    <>
      <Button onClick={handleAddPizza} variant="primary">Add Pizza</Button>
      <div>
        <h2>Cart:</h2>
        {cart.map((pizza, index) => (
          <div key={index}>
            <h3>Pizza {index + 1}</h3>
            
            <p>Size: {pizza.size}</p>
            <SizeSelector></SizeSelector>

            <p>Toppings: {pizza.getPizzaDetails().toppings.join(', ')}</p>
            <ToppingsSelector></ToppingsSelector>

            <p>Price: £{pizza.getPizzaDetails().pizzaPrice}</p>
            <CloseButton onClick={() => { removeFromCart(index) }} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
