import Background from './components/Background';
import './App.css';
import { BrowserRouter,Route,Routes ,Navigate, useNavigate} from "react-router-dom";
import Login from './pages/login';
import Waiting from './pages/waiting';
import { Question } from './pages/question';
import { QuizContext } from './components/QuizContext';

function App() {
  const quiz = {
    loginTime: { label: 'Login Time', id: '2025-05-02T00:18:00+05:30' },
    startTime: { label: 'Start Time', id: '2025-05-02T00:23:00+05:30' },
    endTime: { label: 'End Time', id: '2025-05-02T00:33:00+05:30' },
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
      // Add more...
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
