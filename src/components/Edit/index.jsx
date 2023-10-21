import PropTypes from 'prop-types';

const Edit = ({ pizza }) => {
  return (
    <div>
      <h2>Edit Pizza {pizza.name}</h2>
      <p>Current Pizza Size: {pizza.size}</p>

    </div>
  );
}

Edit.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default Edit;
