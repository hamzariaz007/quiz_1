import React, { useState } from 'react';

function Room() {
  const [isLightOn, setIsLightOn] = useState(true);
  const [temperature, setTemperature] = useState(35);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  const increaseTemperature = () => {
    if (temperature < 40) {
      setTemperature(temperature + 1);
    }
  };

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  const temperatureColor = temperature >= 40 ? 'red' : 'blue';

  return (
    <div>
      <h2>Room Component</h2>
      <div style={{ backgroundColor: isLightOn ? 'white' : 'black', height: '200px' }}>
        {isLightOn ? 'Light is ON' : 'Light is OFF'}
      </div>
      <button onClick={toggleLight}>{isLightOn ? 'Turn OFF' : 'Turn ON'}</button>
      <p style={{ color: temperatureColor }}>Temperature: {temperature}</p>
      <button onClick={increaseTemperature}>+</button>
      <button onClick={decreaseTemperature}>-</button>
    </div>
  );
}

export default Room;
