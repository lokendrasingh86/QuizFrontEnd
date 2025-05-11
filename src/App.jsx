import Background from './components/Background';
import './App.css';
import { BrowserRouter,Route,Routes ,Navigate, useNavigate} from "react-router-dom";
import Login from './pages/login';
import Waiting from './pages/waiting';
import { Question } from './pages/question';
import { QuizContext } from './components/QuizContext';

function App() {
 const quiz = {
  loginTime: { label: 'Login Time', id: '2025-05-11T11:39:00+05:30' },
  startTime: { label: 'Start Time', id: '2025-05-11T11:44:00+05:30' },
  endTime: { label: 'End Time', id: '2025-05-11T12:00:00+05:30' },
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
    },
    {
      id: 3,
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      answer: 'Mars'
    },
    {
      id: 4,
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Mark Twain', 'Jane Austen', 'Charles Dickens'],
      answer: 'William Shakespeare'
    },
    {
      id: 5,
      question: 'What is the boiling point of water at sea level?',
      options: ['100°C', '90°C', '80°C', '110°C'],
      answer: '100°C'
    },
    {
      id: 6,
      question: 'Which language is primarily spoken in Brazil?',
      options: ['Spanish', 'Portuguese', 'French', 'German'],
      answer: 'Portuguese'
    }
  ]
};


 
//     const navigate=useNavigate();

//     const handleClick=()=>{
//      navigate('/login');
//     };
  
 
  return (
    <>
    <QuizContext.Provider value={quiz}>

    
    {/* <div> welcome to quiz website</div>
    <button onClick={handleClick} id='first-button'>Click Here to Continue</button> */}
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/waiting' element={<Waiting/>}></Route>
        <Route path='/question' element={<Question/>}></Route>
      </Routes>
    </BrowserRouter>
    </QuizContext.Provider>
    </>
  )
}

export default App
