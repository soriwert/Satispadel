import { useState, useEffect } from "react";
import moment from "moment";
import 'moment/locale/es';
import DayButton from "./DayButton";
import HourButton from "./HourButton";

moment.locale('es');

function Match() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHours, setSelectedHours] = useState([]);
  const [nextDays, setNextDays] = useState([]);

  useEffect(() => {
    const today = moment();
    const next14Days = [];
    for (let i = 0; i < 14; i++) {
      next14Days.push(today.clone().add(i, "days"));
    }
    setNextDays(next14Days);
  }, []);

  function handleDaySelect(day) {
    setSelectedDay(day);
    setSelectedHours([]);
  }

  function handleHourSelect(hour) {
    setSelectedHours(prevSelectedHours =>
      prevSelectedHours.includes(hour)
        ? prevSelectedHours.filter(h => h !== hour)
        : [...prevSelectedHours, hour]
    );
  }

  function generateHours() {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
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
      <p>Selecciona los días de la semana que quieres jugar</p>
      <div className="days-container">
        {nextDays.map((day, index) => (
          <DayButton
            key={index}
            day={day}
            isSelected={selectedDay && day.isSame(selectedDay, "day")}
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
                isSelected={selectedHours.includes(hour)}
                onSelect={handleHourSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Match;
