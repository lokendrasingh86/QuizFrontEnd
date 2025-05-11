import React, { useContext } from 'react'
import "./Duration.css";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from './QuizContext';

export const Duration = () => {

  const quiz = useContext(QuizContext);


  const [timeLeft,setTimeLeft]=useState(null);

  useEffect(()=>{
    console.log(quiz.startTime.id)
    const targetTime=new Date(quiz.startTime.id).getTime();
    const interval=setInterval(()=>{
      const now=new Date().getTime();
      const secondsLeft=Math.max(0, Math.floor((targetTime - now) / 1000));
      setTimeLeft(secondsLeft);
      
      if (secondsLeft <= 0) {
        clearInterval(interval);
      }
    },1000);
    return ()=> clearInterval(interval);

  },[quiz.startTime.id]);


  const formatTime = (secs) => {
    const minutes = String(Math.floor(secs / 60)).padStart(2, '0');
    const seconds = String(secs % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
    
  };

    var details="BCS-401/Cs/C";
    var Question=quiz.questions.length;
    var Marks = Question*2;
    var quizduration= "10 Mins";


    const navigate=useNavigate(null);
    const handleClick=()=>{
    navigate('/question');
    };
    

      
  return (

            <div className='details'>
                <div className='first'>
                    <h4>Course/Dept/Section : <span> {details} </span></h4>
                    <h4>Question: <span>{Question}</span> | Total Marks# <span>{Marks}</span> </h4>
                    <h4>Quiz Duration: <span>{quizduration}</span></h4>
                </div>
                <div className='waiting-timer'>

                    <h2 className='timer'>{timeLeft != null ? formatTime(timeLeft) : "Loading.."}  
                    </h2>
                    <h2 >{timeLeft===0 && <button className='buttons'onClick={handleClick}>Start Quiz</button> }
                    </h2>

                </div>
            </div>
  )
}
