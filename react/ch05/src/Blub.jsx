import { useState } from "react";

const Blub = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "yellow" }}>OFF</h1>
      )}
      <button
        style={{ backgroundColor: "white", color: "black" }}
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Blub;
