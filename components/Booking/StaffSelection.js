import React from 'react';

function StaffSelection({ staff, onSelect }) {
  return (
    <div>
      <h2>Select a staff member</h2>
      <ul>
        {staff.map((staffMember, index) => (
          <li key={index} onClick={() => onSelect(staffMember)}>
            {staffMember.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StaffSelection;
