import '../../css/match/Match.css'
import PropTypes from 'prop-types';

function DayButton({ day, isSelected, onSelect }) {
  return (
    <button
      className={isSelected ? "selected-day" : ""}
      onClick={() => onSelect(day)}
    >
      {day.format("DD/MM")}
    </button>
  );
}

export default DayButton;

DayButton.propTypes = {

  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

