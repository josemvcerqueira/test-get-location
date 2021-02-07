import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react'
import io from "socket.io-client";

function App() {
  const socket = useRef(null)
  const [value, setValue ] = useState('')
  useEffect(() => {
    // How to handle authentication
    // On APP Error should refresh the accessToken and retry once again
    socket.current =  io('http://localhost:5000/driver')

    socket.current.on('1', setValue)

    return () => {
      // Disconnect if it unmounts
      if(socket.current) socket.current.disconnect()
    }
  }, [])

  console.log(value, 'driver location')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
