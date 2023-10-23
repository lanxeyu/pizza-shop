import { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { availableToppings } from '../../utilities/script';

const EditPizza = ({ pizza }) => {

  const handleChangeSize = (size) => {
    pizza.changeSize(size);
  };

  const [selectedToppings, setSelectedToppings] = useState(pizza.toppings);

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
          {availableToppings.map((topping, index) => (
            <ToggleButton key={index} id={`tbg-check-${index}`} value={topping} onClick={() => handleChangeToppings(topping)} variant="primary">
              {topping}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

    </>
  );
}

EditPizza.propTypes = {
  pizza: PropTypes.object.isRequired
};

export default EditPizza;
