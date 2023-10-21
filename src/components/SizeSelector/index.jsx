import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function SizeSelector() {

  return (
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Small
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Medium
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Large
        </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default SizeSelector;
