// PopUpNotification.js

import React from 'react';

function PopUpNotification({ message, onClose }) {
  return (
    <div className="popup">
      {message}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default PopUpNotification;