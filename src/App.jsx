import Background from './components/Background';
import './App.css';
import { BrowserRouter,Route,Routes ,Navigate, useNavigate} from "react-router-dom";
import Login from './pages/login';
import Waiting from './pages/waiting';
import { Question } from './pages/question';
function App() {

 
//     const navigate=useNavigate();

//     const handleClick=()=>{
//      navigate('/login');
//     };
  
 
  return (
    <>
    {/* <div> welcome to quiz website</div>
    <button onClick={handleClick} id='first-button'>Click Here to Continue</button> */}
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/waiting' element={<Waiting/>}></Route>
        <Route path='/question' element={<Question/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
