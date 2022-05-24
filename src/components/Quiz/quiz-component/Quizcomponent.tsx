import React, { useState } from 'react'
import Quizquestions from '../quiz-question/Quizquestions';

const Quizcomponent: React.FC = () => {
const[quiz,setQuiz] = useState(true);



  const  handleQuiz:React.MouseEventHandler<HTMLButtonElement> = () => {
    setQuiz(false)

   }

  return (
    <>
    {quiz ? <button className="btn btn-primary" onClick={handleQuiz}>Start Quiz</button>:
    <>
   
    <Quizquestions/>
    {/* <Quizend/> */}
    </>
    }
   
    </>
  )
}

export default Quizcomponent