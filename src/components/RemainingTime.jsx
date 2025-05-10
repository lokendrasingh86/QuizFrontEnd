import React, { useEffect, useState } from 'react'

export const RemainingTime = () => {
    const quiz = {
        loginTime: {
          label: 'Login Time',
          id: '2025-05-11T11:18:00+05:30'
        },
        startTime: {
          label: 'Start Time',
          id: '2025-05-10T11:25:00+05:30'
        },
        endTime: {
          label: 'End Time',
          id: '2025-05-10T11:35:00+05:30'
        },
        questions: [
          {
            id: 1,
            question: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
            answer: 'Paris'
          },
          {
            id: 2,
            question: '2 + 2 = ?',
            options: ['3', '4', '5', '6'],
            answer: '4'
          }
        ]
      };
      const [time,setTime]=useState();
      useEffect(()=>{
        const target=new Date(quiz.endTime.id).getTime();
        const interval=setInterval(()=>{
            const now = new Date().getTime();
            const secondsLeft=Math.max(0,Math.floor((target-now)/1000));
            setTime(secondsLeft);
            if (secondsLeft<=0){
                clearInterval(interval);
            }
        },1000)
        return ()=> clearInterval(interval);
      },[quiz.endTime.id])
      const formatTime = (secs)=>{
        const minutes= String(Math.floor(secs/60)).padStart(2,'0');
        const seconds=String(secs % 60).padStart(2,'0');
        return `${minutes}:${seconds}`
      }
  return (
    <>
        <h2 className='timer'>{time != null ? formatTime(time) : "00:00"}  
        </h2>
    </>
  )
}
