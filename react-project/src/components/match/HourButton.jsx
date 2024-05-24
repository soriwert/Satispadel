import '../../css/match/Match.css';
import PropTypes from 'prop-types';

function HourButton({ hour, isSelected, onSelect }) {
  return (
    <button
      className={isSelected ? "selected-hour" : ""}
      onClick={() => onSelect(hour)}
    >
      {hour}
    </button>
  );
}

HourButton.propTypes = {
  hour: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default HourButton;
