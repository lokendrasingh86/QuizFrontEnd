import React from 'react'
import "./Duration"

export const Instructions = () => {
  return (
    <div>
        {/* Instruction For Quizes */}
        <div className="instruction">
                <h3>Instructions:</h3>
            <ul >
                <li className="points"> This is a Time test. </li>
                <li className="points"> Once the Quiz Start,The time cannot be paused.</li>
                <li className="points"> This quiz best works on Google Chrome browser.</li>
                <li className="points"> You can attempt a question upto 5 times only.</li>
                <li className="points">You have to complete the quiz on this device itself. Device can not be changed in between the quiz.</li>
                <li className="points"> Please ensure you have a stable internet connection.</li>
                <li className="points">If any choice is selected then you will see this "Submit Answer" button at bottom. Don't forget to click on the "Submit Answer" </li>
            </ul>

            </div>
    </div>
  )
}
