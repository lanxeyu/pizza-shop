import PropTypes from 'prop-types';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const Edit = ({ pizza }) => {
  const handleChangeSize = (size) => {
    pizza.changeSize(size);
  };

  return (
    <div>
      <h2>Edit Pizza {pizza.name}</h2>
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
  );
}

Edit.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default Edit;
