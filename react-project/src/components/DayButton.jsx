import '../css/Match.css'

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
