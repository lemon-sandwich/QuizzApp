import React, { useContext, useState } from 'react'
import './Quiz.css'
import '../../App.css'
import { Questions } from '../helpers/Questions';
import { GameStateContext } from '../helpers/GameContext';
export const Quiz = ()=> {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {score, setScore, setGameState} = useContext(GameStateContext);
    const chooseOption = (option: string) => {
        setOptionChosen(option);
        if(optionChosen === Questions[currentQuestion].answer)
        {
            setScore(score+1);
        }
        currentQuestion === Questions.length - 1 ? setGameState("finished") : setCurrentQuestion(currentQuestion+1);
    }

  return (
    <div className='Quiz'>
        <h1 id="question">{Questions[currentQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={() => {chooseOption("optionA")}}>{Questions[currentQuestion].optionA}</button>
            <button onClick={() => {chooseOption("optionB")}}>{Questions[currentQuestion].optionB}</button>
            <button onClick={() => {chooseOption("optionC")}}>{Questions[currentQuestion].optionC}</button>
            <button onClick={() => {chooseOption("optionD")}}>{Questions[currentQuestion].optionD}</button>
        </div>
    </div>
  )
}
