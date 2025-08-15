import React from 'react';
import Main from './components/Main';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        {/* Other routes */}
      </Routes>
    </AnimatePresence>
  );
}
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

console.log('hey wait you arn\'t supposed to be here. There is nothing to look for here, move along.');
const secretCode = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
const lobotomyCode = ['l', 'o', 'b', 'o', 't', 'o', 'm', 'y'];
let userInput = [];
let secretInput = [];
let lobotomyInput = [];

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  userInput.push(event.key);
  secretInput = userInput.slice(-secretCode.length); // Keep only the last N keys
  if (secretInput.join(',') === secretCode.join(',')) {
    console.log('OK FINE YOU GOT ME! NOW GO AWAY');
    // Perform the desired action here
  }

  lobotomyInput = userInput.slice(-lobotomyCode.length); // Keep only the last N keys
  if (lobotomyInput.join(',') === lobotomyCode.join(',')) {
    console.log('el lobotomy');
    // Perform the desired action here
    const lobotomySound = new Audio(process.env.PUBLIC_URL + `/sounds/sfx/lobotomy.mp3`);
    lobotomySound.play();
  }
});


export default App;