// src/components/CustomTick.js
import React from 'react';

const CustomTick = (props) => {
    const { active, payload, label } = props;
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <ul>
            {payload.map((entry, index) => (
              <li key={`item-${index}`}>{`${entry.name}: ${entry.value}`}</li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

export default CustomTick;
