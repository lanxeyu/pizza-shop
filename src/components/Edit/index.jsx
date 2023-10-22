import { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const Edit = ({ pizza }) => {

  const handleChangeSize = (size) => {
    pizza.changeSize(size);
  };

  const [selectedToppings, setSelectedToppings] = useState(Object.keys(pizza.toppings).filter(topping => pizza.toppings[topping]));

  const handleToppingChange = (toppingName) => {
    const updatedToppings = [...selectedToppings];

    if (updatedToppings.includes(toppingName)) {
      // Topping is already selected, so remove it
      updatedToppings.splice(updatedToppings.indexOf(toppingName), 1);
    } else {
      // Topping is not selected, so add it
      updatedToppings.push(toppingName);
    }

    setSelectedToppings(updatedToppings);

    // Update the pizza's toppings with the selected toppings
    const newToppings = { ...pizza.toppings };
    Object.keys(newToppings).forEach((topping) => {
      newToppings[topping] = updatedToppings.includes(topping);
    });
    pizza.toppings = newToppings;
  };

  return (
    <>
      <h2>Pizza {pizza.name}</h2>


      {/* Size selector */}
      <div>        
        <ToggleButtonGroup type="radio" name="options" defaultValue={pizza.size}>
          <ToggleButton id="tbg-radio-1" value={'Small'} onClick={() => handleChangeSize('Small')}>
            Small
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={'Medium'} onClick={() => handleChangeSize('Medium')}>
            Medium
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={'Large'} onClick={() => handleChangeSize('Large')}>
            Large
          </ToggleButton>
        </ToggleButtonGroup>
      </div>


      {/* Toppings selector */}
      <div>
        <ToggleButtonGroup vertical type="checkbox" value={selectedToppings} onChange={() => {}} className="mb-2">

          {/* Dynamically generate toppings buttons */}
          {Object.keys(pizza.toppings).map((topping, index) => (
            <ToggleButton key={index} id={`tbg-check-${index}`} value={topping} onClick={() => handleToppingChange(topping)} variant="primary">
              {topping}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

    </>
  );
}

Edit.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default Edit;
