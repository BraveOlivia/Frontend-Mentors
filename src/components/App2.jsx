import React, { useState } from "react";
import "./input/Button.css";

const App2 = (props) => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const [isCustom, setIsCustom] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);

  function handleBill(event) {
    setBill(event.target.value);
  }

  function handleTip(event) {
    const { name, value } = event.target;
    setTip(value);
    setActiveBtn(name);
  }

  function handlePeople(event) {
    setPeople(event.target.value);
  }

  function handleCustomTip() {
    setIsCustom(true);
    setActiveBtn(0);
  }

  function handleReset() {
    setBill("");
    setPeople("");
    setTip("");
    setActiveBtn(0);
  }

  return (
    <div>
      <h1>Bill</h1>
      <input type="number" onChange={handleBill} value={bill} />

      <h1>Tip</h1>
      <button
        name="1"
        value="5"
        onClick={handleTip}
        className={`btn`}
        style={{ backgroundColor: activeBtn === "1" && "red" }}
      >
        5%
      </button>
      <button
        name="2"
        value="10"
        onClick={handleTip}
        className="btn"
        style={{ backgroundColor: activeBtn === "2" && "red" }}
      >
        10%
      </button>
      <button
        name="3"
        value="15"
        onClick={handleTip}
        className="btn"
        style={{ backgroundColor: activeBtn === "3" && "red" }}
      >
        15%
      </button>
      <button
        name="4"
        value="25"
        onClick={handleTip}
        className="btn"
        style={{ backgroundColor: activeBtn === "4" && "red" }}
      >
        25%
      </button>

      <button
        name="5"
        value="50"
        onClick={handleTip}
        className="btn"
        style={{ backgroundColor: activeBtn === "5" && "red" }}
      >
        50%
      </button>

      {!isCustom && (
        <button name="6" className="btn" onClick={handleCustomTip}>
          Custom
        </button>
      )}
      {isCustom && <input type="number" onChange={handleTip} value={tip} />}

      <h1>Number of people</h1>
      {people === "0" && <h1>Can't be zero</h1>}
      <input type="number" onChange={handlePeople} value={people} />

      <h1>Amount of Tip</h1>
      <h2>$ {((bill * tip) / 100).toFixed(2)}</h2>

      <h1>Total</h1>
      <h2>$ {(((bill * tip) / 100) * people).toFixed(2)}</h2>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App2;
