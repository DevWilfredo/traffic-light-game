import { useState } from "react";
import LightChamberComponent from "./LightChamberComponet";

// Chambers Data
const chambers = [
  { styleName: "redChamber", value: "red" },
  { styleName: "yellowChamber", value: "yellow" },
  { styleName: "greenChamber", value: "green" },
];

const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState("red");

  const handleLightChange = (colorName) => {
    setActiveColor(colorName);
  };

  return (
    <div className="text-center">
      <div className="top-semaforo">
        <p>Hola</p>
      </div>
      <div className="semaforo">
        {chambers.map((chamber) => (
          <LightChamberComponent
            key={chamber.value}
            styles={chamber.styleName}
            value={chamber.value}
            activeColor={activeColor}
            functionality={handleLightChange}
          />
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
