import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import DayButton from "./DayButton";
import HourButton from "./HourButton";

moment.locale("es");

function Match() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);

  useEffect(() => {
    const today = moment();
    const next14Days = [];
    for (let i = 0; i < 14; i++) {
      next14Days.push(today.clone().add(i, "days"));
    }
    setSelectedSlots(next14Days.map(day => ({ day, hours: [] })));
  }, []);

  function handleDaySelect(day) {
    setSelectedDay(day);
    setSelectedSlots(prevSelectedSlots => {
      const updatedSlots = prevSelectedSlots.map(slot =>
        slot.day.isSame(day, "day")
          ? { ...slot, day, hours: slot.hours }
          : slot
      );
      return updatedSlots;
    });
  }

  function handleHourSelect(hour) {
    setSelectedSlots(prevSelectedSlots => {
      const updatedSlots = prevSelectedSlots.map(slot =>
        slot.day.isSame(selectedDay, "day")
          ? {
              ...slot,
              hours: slot.hours.includes(hour)
                ? slot.hours.filter(h => h !== hour)
                : [...slot.hours, hour]
            }
          : slot
      );
      return updatedSlots;
    });
  }

  function generateHours() {
    const slots = [];
    for (let hour = 17; hour < 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${String(hour).padStart(2, "0")}:${String(
          minute
        ).padStart(2, "0")}`;
        slots.push(time);
      }
    }
    return slots;
  }

  const hours = generateHours();

  return (
    <div>
      <p>Selecciona el día de la semana que quieres jugar</p>
      <div className="days-container">
        {selectedSlots.map(({ day }, index) => (
          <DayButton
            key={index}
            day={day}
            isSelected={day && day.isSame(selectedDay, "day")}
            onSelect={handleDaySelect}
          />
        ))}
      </div>

      {selectedDay && (
        <div>
          <p>Horarios para {selectedDay.format("DD/MM")}:</p>
          <div className="hours-container">
            {hours.map((hour, index) => (
              <HourButton
                key={index}
                hour={hour}
                isSelected={selectedSlots.find(slot =>
                  slot.day.isSame(selectedDay, "day")
                ).hours.includes(hour)}
                onSelect={() => handleHourSelect(hour)}
              />
            ))}
          </div>
        </div>
      )}

      {selectedSlots.some(({ hours }) => hours.length > 0) && (
        <button> guardar </button>
      )}

      <div>
        <p>log :</p>
        <p>tus días y horas seleccionadas son:</p>
        <ul>
          {selectedSlots.map(({ day, hours }) => (
            <li key={day}>
              {day.format("DD/MM")}: {hours.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Match;
