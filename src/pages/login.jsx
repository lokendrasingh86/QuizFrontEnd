import Background from "../components/Background";

import { Route,Navigate, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate(); //  Define navigate here

  const handleClick = () => {
    navigate('/waiting'); 
  };
  
    return(
        <>
        
    <Background className="main ">
    <div className='container'> 
      <div className='input-container'>
        <div className='access-heading'>Enter Your Details</div><br /><br />
        <form className='access-quiz-form'>
          <div >
            <label>Enter Quizz Code</label><br />
            <input placeholder='Enter Quiz Code'></input>
          </div>
          <div className='input-wrapper'>
            <label> Admission Number</label>
            <input placeholder='Enter Admission Number'></input>
          </div>
          <div className='input-wrapper'>
            <label> Enter 4-digit Pin</label>
            <input placeholder='4-digit pin'></input>
          </div>

          <div>
            <button onClick={handleClick} className="continue-button"type='submit'>Continue</button>
          </div>

        </form>

      </div>

    <div className='notes'>
      <h3>Notes:</h3>
      <ul>
      <li>
        <span> How do I get the quiz code?</span> 
        <br />
        Your faculty will communicate the quiz code to you when a quiz is about to start.</li>
        <li>
          <span>How do I set my own 4 digit pin?
          </span><br />
          You can set your pin on the mobile app. The option to do so is in the bottom tab bar. If you change the pin then please make sure you enter the new pin on this screen.
        </li>
        <li>Zero and english alphabet O look similar. Just be mindful of that.</li>
        <li>The code will work only if the quiz is scheduled now.</li>
        <li>If the quiz has already been completed in the past or if it is still some time away then you'll not be able to access quiz even if the code is valid.</li>
      </ul>
    </div>
    </div>
  </Background>
        </>
    )
}

export default Login;