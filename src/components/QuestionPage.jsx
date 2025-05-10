import React from 'react'
import { useState,useContext } from 'react';
import { RemainingTime } from './RemainingTime';
import "./QuestionPage.css"
import { QuizContext } from './QuizContext';

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
        id: '2025-05-02T00:33:00+05:30'
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
          question: 'Which planet is known as the Red Planet?',
          options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
          answer: 'Mars'
        },
        {
          id: 3,
          question: 'Who wrote "Romeo and Juliet"?',
          options: ['William Shakespeare', 'Mark Twain', 'J.K. Rowling', 'Charles Dickens'],
          answer: 'William Shakespeare'
        },
        {
          id: 4,
          question: 'What is the boiling point of water at sea level?',
          options: ['100°C', '90°C', '80°C', '70°C'],
          answer: '100°C'
        },
        {
          id: 5,
          question: 'What is 5 x 6?',
          options: ['30', '25', '20', '35'],
          answer: '30'
        },
        {
          id: 6,
          question: 'Which language is primarily spoken in Brazil?',
          options: ['Spanish', 'Portuguese', 'French', 'German'],
          answer: 'Portuguese'
        }
      ]
    }
    ]);
    const quiz = useContext(QuizContext);
      
      const [currentIndex,setCurrentIndex]=useState(0);
      const handleNext=()=>{
        if(currentIndex < ques[0].questions.length -1){
          setCurrentIndex(currentIndex+1);
          
        }
      }
      const handleBack=()=>{
        if(currentIndex > 0){
          setCurrentIndex(currentIndex-1)
        }
        else{
          setCurrentIndex(ques[0].questions.length-1)
        }
      }
      const currentQuestion = ques[0].questions[currentIndex];

      const [selectedOption, setSelectedOption] = useState(null);
      let count=1;

  return (
    <div className='quiz-container'>
      <div className='top'>
      <h2 style={{marginLeft:'10px'}}>Question:{currentIndex+1}</h2>
      <div style={{marginRight:'20px',backgroundColor:'rgb(249, 167, 80)'}}>
      <RemainingTime ></RemainingTime>
      </div>
      </div>

      <div className='ques'>
      <div style={{marginTop:'30px',marginRight:'5px'}}>
        Q{currentIndex+1}
      </div>
      <div className='ques-box'>
      {ques[0].questions[currentIndex].question} 
      </div>
      </div>

      <div className='answer-box'> 
        {ques[0].questions[currentIndex].options.map((opt,index)=> (
         <li onClick={()=>setSelectedOption(opt)} className={`answer ${selectedOption === opt ? 'selected' : ''}` } key={index}>{count++}: {opt}</li>
        ))}
      </div>

      <div className='button-container'>
        <button className='back-button' onClick={handleBack}>Back</button>
        {currentIndex != ques[0].questions.length-1&&
          <button className='next-button'onClick={handleNext} disabled={currentIndex === ques[0].questions.length - 1}>Next</button>
        }
        
        {currentIndex === ques[0].questions.length - 1 && <button className='submit-button'>Submit </button>}
      </div>

    </div>
  )
}
