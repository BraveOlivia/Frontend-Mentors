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
        <span className="logo">SPLI</span>
        <br />
        <span className="logo">TTER</span>
        {/* <h1>
          Bill {bill}; Tip {tip}; people {people}
        </h1> */}
      </header>
      <div className="card row card-content">
        <div className="column">
          <UserInput onAdd={handleBill} title="Bill" value={bill} />
          <TipSelection onSelected={handleTip} selected={tip} />
          <UserInput
            onAdd={handlePeople}
            title="Number of People"
            value={people}
          />
        </div>
        <div className="column right-column">
          <ResultCard
            tipAmount={((bill * tip) / 100).toFixed(2)}
            total={
              bill === "" && tip === "" && people === ""
                ? "0.00"
                : ((bill * (1 + tip / 100)) / people).toFixed(2)
            }
            onReset={resetHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
