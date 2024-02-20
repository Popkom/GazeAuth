import React, { useState } from "react";
import NumberPad from "./numpad";

function App() {
  const [displayedNumbers, setDisplayedNumbers] = useState("");

  const handleNumberClick = (number) => {
    setDisplayedNumbers(number);
  };

  return (
    <div className="container mx-auto mt-8">
      {/*<div className="mt-4">{displayedNumbers}</div>*/}
      <NumberPad onNumberClick={handleNumberClick} />
    </div>
  );
}

export default App;
