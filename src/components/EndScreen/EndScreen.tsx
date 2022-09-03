import React, { useContext } from 'react'
import './EndScreen.css'
import '../../App.css'
import { GameStateContext } from '../helpers/GameContext';
import { Questions } from '../helpers/Questions';
export const EndScreen = ()=> {
    const {score, setScore, setGameState,name,setName} = useContext(GameStateContext);
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h1>Candidate Name: {name}</h1>
      <h1>Score: {score}/{Questions.length}</h1>
      <button onClick={() => {setGameState("menu"); setScore(0);setName("")}}>Restart Quiz</button>
    </div>
  )
}
