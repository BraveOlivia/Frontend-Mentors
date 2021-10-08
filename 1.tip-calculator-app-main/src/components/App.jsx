import React, { useState } from "react";
import UserInput from "./input/UserInput";
import TipSelection from "./input/TipSelection";
import ResultCard from "./output/ResultCard";
import Card from "./Card";
import "./App.css";

function App() {
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  const [bill, setBill] = useState(0);
  // const [tip, setTip] = useState(0);
  // const [numOfPeople, setPeople] = useState(0);

  function handleBill(bill) {
    console.log("bill", bill);
    setBill(bill);
  }

  function handleTip(tip) {
    console.log("tip", tip);
    console.log("bill * tip", (bill * tip) / 100);
    setTipAmount((bill * tip) / 100);
  }

  function handleTotal(numOfPeople) {
    setTotal(tipAmount * numOfPeople);
  }

  return (
    <body>
      <header>SPLITTER</header>
      <Card>
        <div className="row card-content">
          <div className="column">
            {/* <form> */}
            <UserInput onAdd={handleBill} title="Bill" />
            <TipSelection onTipSelection={handleTip} />
            <UserInput onAdd={handleTotal} title="Number of People" />
            {/* </form> */}
          </div>
          <div className="column right-column">
            <ResultCard tipAmount={tipAmount} total={total} />
          </div>
        </div>
      </Card>
    </body>
  );
}

export default App;
