import react, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('')
 const [email, setEmail] = useState('')

  return (
    <div>

      <form>
        <label>Bill Total</label>
        <input 
          type="text"
          placeholder='0.00'
          value={name}
          onChange={(e) => setName(e.target.value )}
        />

        <label>Tip Amount</label>
        <input 
          type="text"
          placeholder='0.00'
          value={email}
          onChange={(e) => setEmail(e.target.value )}
        />
      </form>
      <div className='summary'>
        <div className='seperate'>
          <label># of people</label>
          <div className='split-control'>
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        <div className='result'>
          <label>Split Total</label>
          <span>Test</span>
        </div>
      </div>

    </div>
    
  );
}

export default App;
