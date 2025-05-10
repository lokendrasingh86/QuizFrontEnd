import React from 'react'
import { useState } from 'react';
import { RemainingTime } from './RemainingTime';

export const QuestionPage = () => {
  const [ques,setques] = useState([
     {
        loginTime: {
          label: 'Login Time',
          id: '2025-05-02T00:18:00+05:30'
        },
        startTime: {
          label: 'Start Time',
          id: '2025-05-02T00:23:00+05:30'
        },
        endTime: {
          label: 'End Time',
          id: '2025-05-02T00:23:00+05:30'
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
      }]);

      
      const [currentIndex,setCurrentIndex]=useState(0);
      const handleNext=()=>{
        if(currentIndex < ques[0].questions.length -1){
          setCurrentIndex(currentIndex+1)
        }
      }
      const handleBack=()=>{
        if(currentIndex > 0){
          setCurrentIndex(currentIndex-1)
        }
      }
      const currentQuestion = ques[0].questions[currentIndex];
  return (
    <div className='quiz-container'>
      <div className='top'>
      <h2>Question {currentIndex+1}</h2>
      <RemainingTime></RemainingTime>
      </div>
      <p>{ques[0].questions[currentIndex].question}</p>
      <ul>
        {ques[0].questions[currentIndex].options.map((opt,index)=> (
         <li key={index}>{opt}</li>
        ))}
      </ul>

      <div>
        <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
        <button onClick={handleNext} disabled={currentIndex === ques[0].questions.length - 1}>Next</button>

        { currentIndex === ques[0].questions.length - 1 && <button>Submit </button>}
      </div>

    </div>
  )
}
