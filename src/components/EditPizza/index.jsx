import { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Badge from 'react-bootstrap/Badge';
import { calculatePizzaPrice } from '../../utilities/script';
import { availableToppings, includedToppings, toppingImages } from '../../utilities/toppings';
import './style.css'

const EditPizza = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState(pizza.size);
  const [selectedToppings, setSelectedToppings] = useState(pizza.toppings);

  const updatePrice = () => {
    const price = calculatePizzaPrice(pizza)
    pizza.price = price;
  };

  const handleChangeSize = (size) => {
    pizza.size = size;
    updatePrice();
  };

  const handleChangeToppings = (toppingName) => {
    const updatedToppings = [...selectedToppings];

    if (updatedToppings.includes(toppingName)) {
      updatedToppings.splice(updatedToppings.indexOf(toppingName), 1);
    } else {
      updatedToppings.push(toppingName);
    }

    setSelectedToppings(updatedToppings);
    pizza.toppings = updatedToppings;
    updatePrice();
  };

  return (
    <>
      {/* <h2>Pizza</h2> */}


      {/* Size selector */}
      <h4 className="selector-titles">Size</h4>
      <div className="size-selector">
        <ToggleButtonGroup type="radio" name="options" value={selectedSize} onChange={(value) => {
            setSelectedSize(value);
            handleChangeSize(value);
          }}>
          <ToggleButton variant="outline-dark" id="tbg-radio-1" value={'Small'}>
            <h5>Small</h5><p>(2 toppings incl.)</p><h5>+£6.99</h5>
          </ToggleButton>
          <ToggleButton variant="outline-dark" id="tbg-radio-2" value={'Medium'}>
            <h5>Medium</h5><p>(3 toppings incl.)</p><h5>+£8.99</h5>
          </ToggleButton>
          <ToggleButton variant="outline-dark" id="tbg-radio-3" value={'Large'}>
            <h5>Large</h5><p>(5 toppings incl.)</p><h5>+£11.99</h5>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>


       {/* Toppings selector */}
      <h4 className='selector-titles'>Toppings ({selectedToppings.length}/{includedToppings[pizza.size]})</h4>
      <p className='selector-titles'>+£1.49 per extra topping</p>
      <div className='toppings-selector'>
        {availableToppings.map((topping, index) => (
          <ToggleButton className='topping-btn'
            key={index}
            variant={selectedToppings.includes(topping) ? 'dark' : 'outline-dark'}
            value={topping}
            onClick={() => handleChangeToppings(topping)}
          >
            <div className="topping-button-contents">
              <img className='topping-image' src={toppingImages[topping]} alt={topping} />
              <h6>{topping}</h6>
            </div>
          </ToggleButton>
        ))}
      </div>

      <div className='pizza-total-price-div'>
        <Badge pill id='pizza-total-price' bg="dark" text="light">Total: £{pizza.price}</Badge>
      </div>
    </>
  );
}

EditPizza.propTypes = {
  pizza: PropTypes.object.isRequired
};

export default EditPizza;
