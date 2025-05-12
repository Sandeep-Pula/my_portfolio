// src/pages/Maintenance.jsx
import React from 'react';
import './Maintenance.css';

const messages = [
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Great things are coming. Refresh your mind and come back soon.”",
  "“Working on something legendary. Stay tuned.”",
  "“This pause is temporary, but innovation is forever.”",
  "“Behind every downtime is a better uptime.”",
  "“I'm not gone—I'm upgrading. 🚀”"
];

const Maintenance = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="maintenance-container">
      <h1>🚧 Site Under Maintenance</h1>
      <p>I'm working behind the scenes to bring you something better.</p>
      <p>Please contact Sandeep Pula @ +1 (341) 204 5933 / pulasaiganasandeep@gmail.com </p>
      <div className="message-board">{randomMessage}</div>

    </div>
  );
};

export default Maintenance;
