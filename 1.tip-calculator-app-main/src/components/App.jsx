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

  function resetHandler() {
    setBill(0);
    setTip(0);
    setPeople(0);
  }

  return (
    <div>
      <header>
        <span>SPLI</span>
        <br />
        <span>TTER</span>
        <h1>
          Bill {bill}; Tip {tip}; people {people}
        </h1>
      </header>
      <div className="card row card-content">
        <div className="column">
          <UserInput onAdd={handleBill} title="Bill" value={bill} />
          <TipSelection onSelected={handleTip} />
          <UserInput
            onAdd={handlePeople}
            title="Number of People"
            value={people}
          />
        </div>
        <div className="column right-column">
          <ResultCard
            tipAmount={((bill * tip) / 100).toFixed(2)}
            total={((tip * bill * people) / 100).toFixed(2)}
            onReset={resetHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
