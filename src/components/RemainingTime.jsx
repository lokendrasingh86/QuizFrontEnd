import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from './QuizContext';

export const RemainingTime = () => {
    const quiz = useContext(QuizContext)
      const [time,setTime]=useState(0);

      useEffect(()=>{
        const target=new Date(quiz.endTime.id).getTime();
        const interval= setInterval (()=>{
          const now = Date.now();
          const diff = target-now;

          if (diff <= 0) {
          clearInterval(interval);
          setTime(0);
          } else {
          setTime(Math.floor(diff / 1000));
          }
        },[1000]);
        return ()=> clearInterval(interval);
      },[quiz.target]);
      const minutes=Math.floor(time/60);
      const seconds = time %60;
  return (
    <>
    {time!== null && 
    <div style={{marginTop:'20px',fontWeight:'bold',fontSize:'25px'}}> {String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}
    </div>}
    </>
  )
}
