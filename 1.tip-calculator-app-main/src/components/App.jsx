import React, { useState } from "react";
import UserInput from "./input/UserInput";
import TipSelection from "./input/TipSelection";
import ResultCard from "./output/ResultCard";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  function handleBill(bill) {
    setBill(bill);
  }

  function handleTip(tip) {
    setTip(tip);
  }

  function handlePeople(people) {
    setPeople(people);
  }

  return (
    <body>
      <header>
        <span>SPLI</span>
        <span>TTER</span>
      </header>
      <div className="card row card-content">
        <div className="column">
          <UserInput onAdd={handleBill} title="Bill" />
          <TipSelection onTipSelection={handleTip} />
          <UserInput onAdd={handlePeople} title="Number of People" />
        </div>
        <div className="column right-column">
          <ResultCard
            tipAmount={(tip * bill) / 100}
            total={(tip * bill * people) / 100}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
