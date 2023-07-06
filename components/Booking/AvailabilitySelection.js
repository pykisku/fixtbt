import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from './AvailabilitySelection.module.css';
import "react-datepicker/dist/react-datepicker.css";

function AvailabilitySelection({ slots, onSelect }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Create a dictionary with dates as keys and slots as values
  const slotsByDate = slots.reduce((dict, slot) => {
    const date = new Date(slot.startAt);
    // Check if date is valid before adding to dict
    if (!isNaN(date)) {
      const dateStr = date.toLocaleDateString();
      if (!dict[dateStr]) dict[dateStr] = [];
      dict[dateStr].push(slot);
    }
    return dict;
  }, {});

  const availableDates = slots.map((slot) => {
    const [year, month, day] = slot.startAt.split("T")[0].split("-");
    return new Date(Date.UTC(year, month - 1, day));
  });

  // Slots for the selected date
  const selectedSlots = selectedDate
    ? slotsByDate[selectedDate.toLocaleDateString()]
    : [];
  console.log("availableDates", availableDates);
  console.log("selectedDate", selectedDate);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    onSelect(slot);
  }

  return (
    <div className={styles.AvailabilitySelection}>
      <h1>Select a Date</h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        highlightDates={availableDates}
        inline
        calendarClassName={styles.react_datepicker}
        className={styles.react_datepicker__input_container}
        wrapperClassName={styles.react_datepicker_wrapper}
      />


{selectedDate && (
        <>
          <h1>Select a Time Slot</h1>
          <div className={styles.timeSlotsContainer}>
            {selectedSlots.map((slot, index) => (
              <button
                className={selectedSlot && selectedSlot.id === slot.id ? styles.selected : styles.localButton}
                key={index}
                onClick={() => handleSlotSelect(slot)}
              >
                {new Date(slot.startAt).toLocaleTimeString()}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default AvailabilitySelection;


