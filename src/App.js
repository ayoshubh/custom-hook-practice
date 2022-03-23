import { useState } from 'react'
import './App.css';
import useRandomJoke from './useRandomJoke'
function App() {
  const joke = useRandomJoke("Shubham" , "Chauhan");
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const generateJoke = e => {
    e.preventDefault()
    
  }


  return (
    <div className="App">
      <h1>Shubham Chauhan Supremacy</h1>
      <h2>Know about his God-like deeds below</h2>
      <h3>{joke}</h3>

      <form>
        <input type="text" placeholder="first Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
        <input type="text" placeholder="last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
}

export default App;
