import React from 'react'
import { useState,useContext } from 'react';
import { RemainingTime } from './RemainingTime';
import "./QuestionPage.css"
import { QuizContext } from './QuizContext';

export const QuestionPage = () => {
  
    const quiz = useContext(QuizContext);
      
      const [currentIndex,setCurrentIndex]=useState(0);
      const handleNext=()=>{
        if(currentIndex < quiz.questions.length -1){
          setCurrentIndex(currentIndex+1);
        }
      }
      const handleBack=()=>{
        if(currentIndex > 0){
          setCurrentIndex(currentIndex-1)
        }
        else{
          setCurrentIndex(quiz.questions.length-1)
        }
      }
      const currentQuestion = quiz.questions[currentIndex];

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
      {currentQuestion.question} 
      </div>
      </div>

      <div className='answer-box'> 
        {quiz.questions[currentIndex].options.map((opt,index)=> (
         <li onClick={()=>setSelectedOption(opt)} className={`answer ${selectedOption === opt ? 'selected' : ''}` } key={index}>{count++}: {opt}</li>
        ))}
      </div>

      <div className='button-container'>
        <button className='back-button' onClick={handleBack}>Back</button>
        {currentIndex != quiz.questions.length-1&&
          <button className='next-button'onClick={handleNext} disabled={currentIndex === quiz.questions.length - 1}>Next</button>
        }
        
        {currentIndex === quiz.questions.length - 1 && <button className='submit-button'>Submit </button>}
      </div>

    </div>
  )
}
