import { useState } from "react";

const ColorBox = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="flex flex-col items-center gap-4">
   
      <div style={{ width: "100px",height: "100px",backgroundColor: color,display: "inline-block",border: "1px solid black",
        }}
      ></div>
      <br />

      <button onClick={changeColor} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors"> Changer ce couleur
      </button>
    </div>
  );
};

export default ColorBox;
