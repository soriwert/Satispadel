import '../css/Match.css'

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

export default HourButton;
