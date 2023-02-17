import { useEffect, useState } from "react";
import "./calculator.css";

function Calculator() {

  const [tip,setTip] = useState('10%');
  const [bill,setBill] = useState('');
  const [seperate,setSplit] = useState(1);
  const [splitTotal,setSplitTotal] = useState(0);

  {/* Manages tip */}
  function handleTipChange(e) {
    let value = e.target.value.replace('%','');
    if (value.indexOf('%') === -1) {
      value = value+'%';
    }
    setTip(value);
  }

  {/* Event Listener loking for value */}
  function handleBillChange(e) {
    setBill(e.target.value);
  }

  function splitMinus() {
    setSplit(oldValue => Math.max(oldValue - 1, 1));
  }

  function splitPlus() {
    setSplit(oldValue => oldValue + 1);
  }

  {/* Calculates the percantages and results */}
  function calculate() {
    const percentage = 1 + parseInt(tip.replace('%','')) / 100;
    const result = (bill * percentage / seperate).toFixed(2);
    setSplitTotal(result);
  }

  useEffect(() => {
    calculate();
  }, [bill,tip,seperate])

    return(
        <div>
        <h1>Marty's Tip Calculator</h1>
        {/* First Form Bill Total */}
      <form>
        <label>Bill</label>
        <input 
          type="text"
          placeholder={'0.00'}
          value={bill}
          onChange={handleBillChange}
        />

        {/* Second form Tip Amount */}
        <label>Tip Amount</label>
        <input 
          type="text"
          placeholder={'0.00'}
          value={tip}
          onChange={handleTipChange}
        />
      </form>

      {/* Summary Information */}
      <div className='summary'>
        <div className='seperate'>
          <label># of people</label>
          <div className='split-control'>
            <button onClick={splitMinus}>-</button>
            <span>{seperate}</span>
            <button onClick={splitPlus}>+</button>
          </div>
        </div>
        <div className='result'>
          <label>Total</label>
          <span>{splitTotal}</span>
        </div>
      </div>
    </div>
    );
}

export default Calculator;