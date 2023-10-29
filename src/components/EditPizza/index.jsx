import { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { availableToppings } from '../../utilities/script';
import './style.css'

const EditPizza = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState(pizza.size);
  const [selectedToppings, setSelectedToppings] = useState(pizza.toppings);

  const handleChangeSize = (size) => {
    pizza.size = size;
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
            <h5>Small</h5>(2 toppings incl.)<br></br>+£6.99
          </ToggleButton>
          <ToggleButton variant="outline-dark" id="tbg-radio-2" value={'Medium'}>
            <h5>Medium</h5>(3 toppings incl.)<br></br>+£8.99
          </ToggleButton>
          <ToggleButton variant="outline-dark" id="tbg-radio-3" value={'Large'}>
            <h5>Large</h5>(5 toppings incl.)<br></br>+£11.99
          </ToggleButton>
        </ToggleButtonGroup>
      </div>


      {/* Toppings selector */}
      <h4 className='selector-titles'>Toppings</h4>
      <p className='selector-titles'>+£1.49 per extra topping</p>
      <div className='toppings-selector'>
        <ToggleButtonGroup vertical type="checkbox" value={selectedToppings} onChange={() => {}} className="mb-2">

          {/* Dynamically generate toppings buttons */}
          {availableToppings.map((topping, index) => (
            <ToggleButton key={index} id={`tbg-check-${index}`} value={topping} onClick={() => handleChangeToppings(topping)} variant="outline-dark">
              {topping}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <div className='pizza-price'>
        <h4>£{pizza.calculatePrice().toFixed(2)}</h4>
      </div>
    </>
  );
}

EditPizza.propTypes = {
  pizza: PropTypes.object.isRequired
};

export default EditPizza;
