import React, { useState } from "react";
import UserInput from "./input/UserInput";
import TipSelection from "./input/TipSelection";
import ResultCard from "./output/ResultCard";
import Card from "./Card";
import "./App.css";

function App() {
  const [tip, setTip] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  function handleTip(bill) {
    // console.log("====================================");
    setTip(bill);
    // console.log("====================================");
  }

  function handleTotal(numOfPeople) {
    setTotal(total);
  }

  return (
    <body>
      <header>SPLITTER</header>
      <Card>
        <div className="row card-content">
          <div className="column">
            <UserInput onAdd={handleTip} title="Bill" />
            <TipSelection />
            <UserInput onAdd={handleTotal} title="Number of People" />
          </div>
          <div className="column right-column">
            <ResultCard tipAmount={tip} total={total} />
          </div>
        </div>
      </Card>
    </body>
  );
}

export default App;
