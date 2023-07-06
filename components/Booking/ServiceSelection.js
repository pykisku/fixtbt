import React, { useState } from "react";
import styles from './ServiceSelection.module.css';

function ServiceSelection({ services, onSelect }) {
  const [selectedService, setSelectedService] = useState(null);

  if (!services) {
    return <div>Loading services...</div>;
  }

  if (services.length === 0) {
    return <div>No services available at the moment. Please try again later.</div>;
  }

  const handleSelect = (service) => {
    setSelectedService(service);
    onSelect(service);
  };

  return (
    <div className={styles.container}>
      <h1>Select a Service</h1>
      {services.map((service) => (
        <button
          className={
            selectedService === service ? styles.selectedLocalButton : styles.localButton
          }
          key={service.id}
          onClick={() => handleSelect(service)}
        >
          {service.itemData.name}
        </button>
      ))}
    </div>
  );
}



export default ServiceSelection;


  