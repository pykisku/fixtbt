import { useState } from 'react';
import styles from './UserDetailForm.module.css';

function UserDetailForm({ onSubmit }) {
  const [details, setDetails] = useState({
    country: '',
    phoneNumber: '',
    email: '',
    firstName: '',
    lastName: '',
    notes: '',
  });

  function handleInputChange(event) {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(details);
  }

  return (
    <form className={styles.localForm} onSubmit={handleSubmit}>
     <label className={styles.localLabel}>
  Country:
  <select name="country" value={details.country} onChange={handleInputChange} className={styles.localSelect}>
    <option value="Australia">Australia</option>
    <option value="USA">USA</option>
    <option value="New Zealand">New Zealand</option>
  </select>
</label>

      <label className={styles.localLabel}>
        Phone number:
        <input type="tel" name="phoneNumber" value={details.phoneNumber} onChange={handleInputChange} className={styles.localInput} />
      </label>

      <label className={styles.localLabel}>
        Email:
        <input type="email" name="email" value={details.email} onChange={handleInputChange} className={styles.localInput} />
      </label>

      <label className={styles.localLabel}>
        First Name:
        <input type="text" name="firstName" value={details.firstName} onChange={handleInputChange} className={styles.localInput} />
      </label>

      <label className={styles.localLabel}>
        Last Name:
        <input type="text" name="lastName" value={details.lastName} onChange={handleInputChange} className={styles.localInput} />
      </label>

      <label className={styles.localLabel}>
        Appointment Notes:
        <textarea name="notes" value={details.notes} onChange={handleInputChange} className={styles.localTextarea} />
      </label>

      <button className={styles.localButton} type="submit">Book Appointment</button>
    </form>
  );
}

export default UserDetailForm;


