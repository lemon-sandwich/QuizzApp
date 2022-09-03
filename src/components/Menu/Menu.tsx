import React, { useContext } from 'react'
import { useState } from 'react';
import { GameStateContext } from '../helpers/GameContext'
import './Menu.css'
export const  Menu =() => {
    const {setGameState, name, setName} = useContext(GameStateContext);
    const [error,setError] = useState<string | null>(null);
  return (
    <div className='Menu'>
      <input type="text" placeholder='Name...' onChange={(e)=> {setName(e.target.value); setError("")}}/>
      <button onClick={()=> {if(name !== "") {setGameState("playing")} else {setError("No Name!")}}}>Start Quiz</button>
      {error === "No Name!" && <p style={{color: "red"}}>Enter Your Name!</p>}
    </div>
  )
}
