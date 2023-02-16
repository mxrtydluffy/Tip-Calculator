import react, { useState } from 'react'

function FormThing() {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')

  return (
    <form>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value )}
      />

      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value )}
      />
    </form>
  )
}