import React, { useState } from 'react';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { GameStateContext } from './components/helpers/GameContext';
import { Quiz } from './components/Quiz/Quiz';
import { EndScreen } from './components/EndScreen/EndScreen';


const App = () => {
  const [gameState,setGameState] = useState("menu");
  const [name,setName] = useState("");
  const [score,setScore] = useState(0);
  return (
    <div className="App">
      <h1 id='heading'>Quiz App</h1>
      <GameStateContext.Provider value={{gameState,setGameState, name, setName,score,setScore}}>
      {gameState === "menu" && <Menu/>}
      {gameState === "playing" && <Quiz/>}
      {gameState === "finished" && <EndScreen/>}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
