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
          type="email"
          placeholder='0.00'
          value={email}
          onChange={(e) => setEmail(e.target.value )}
        />
      </form>

    </div>
    
  );
}

export default App;
