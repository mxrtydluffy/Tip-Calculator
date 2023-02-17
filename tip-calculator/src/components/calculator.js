import React, { useState } from "react";
import "./calculator.css";

function Calculator() {

    const [bill,setBill] = useState('0.00');
    const [tipPercentage,setTip] = useState('15%');
    const [split,setSplit] = useState(1);

    // For percantage sign
    // function handleTipChange(e) {
    //     let value = e.target.value.replace('%', '');
    //     if (value.indexOf(value = '%') === -1) {
    //         value = value + '%';
    //     }
    //     setTip(value);
    // }
    const tip = (bill * tipPercentage / 100) / split;
    const total = (bill * (1 + tipPercentage / 100)) / split;

    const changeBill = (e) => {
        setBill(e.target.value);
    }

    const tipAmount = (e) => {
        setTip(e.target.value);
    }

    const peopleAmount = (e) => {
        setSplit(e.target.value);
    }

    const handleClick = (e) => {
        if (e.target.name === "decrease") {
            setTip(tipPercentage - 1);
        } else  if (e.target.name === "increase") {
            setTip(tipPercentage + 1);
        } else if (e.target.name === ""){
            setSplit(split - 1)
        } else if (e.target.name === ""){
            setSplit(split +1);
        }
    }

    return(
        <div>
        {/* First Form Bill Total */}
      <form>
        <label>Bill Total</label>
        <input 
          type="number"
          placeholder='0.00'
          value={bill}
          onChange={changeBill}
        />

        {/* Second form Tip Amount */}
        <label>Tip Amount</label>
        <input 
          type="number"
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
            <button name="decrease">-</button>
            <span>{split}</span>
            <button name='increase'>+</button>
          </div>
        </div>
        <div className='result'>
          <label>Split Total</label>
          { split}
        </div>
      </div>
    </div>
    )
}

export default Calculator;