import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { useAppSelector } from '../../../redux/hooks';
import Quizend  from "../quiz-end/Quizend"
// import {getQuiz } from './quizSlice';
const _ = require("lodash");

const Quizquestions: React.FC= () => {
  
  const question = useAppSelector((state) => state.quiz.value);
  let random_question = _.shuffle(question).slice(0,10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const timerRef = useRef() as LegacyRef<Countdown>;

 

 
  let quizData:any = [];
  random_question.forEach((element: { id: number; questionText: string; answerOptions: any; } ) => { 
    quizData.push({
      id: element.id,
      questionText:element.questionText,
      answerOptions:element.answerOptions

   }) 
  })


  const handleAnswerOptionClick = (isCorrect: boolean) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quizData.length) {
   	setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const  handlequestionComplete = ()=>{
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < quizData.length) {
      setTimeout(()=>{
        // @ts-ignore: Object is possibly 'null'.
        timerRef?.current.start();
      }, 200)
    }else{
      setShowScore(true)
    }

   
  }
  return (
    <div className="App">
      {showScore ? (
				<div className='score-section'>
				<h4>You scored {score} out of {quizData?.length}, You have scored {score /quizData.length*100}%.</h4>	
          <Quizend  data={quizData}/>

        
				</div>
			) : ( 
				<>
					<div className='question-section'>
          <h2 text-align="center">Quiz started</h2>
						<div className='question-count'>
						{	quizData && <><span>Question {currentQuestion + 1}</span><span>/{quizData?.length}</span></>}
						</div>

         
					{	quizData && <div className='question-text'>QUE:{quizData[currentQuestion]?.questionText}</div>} 
					</div>
					<div className='answer-section'>
						{quizData[currentQuestion]?.answerOptions.map(( answerOption: { isCorrect: boolean; answerText: string }, id:number) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={id} >
                {answerOption.answerText}
                
                </button>
						))
           
            }
             
					</div>
          <Countdown
          ref={timerRef}
          date={Date.now() + 60000}
          onComplete={() => {
           handlequestionComplete();
            
          }}
        />
				</>
			)}
    </div>
  )
}

export default Quizquestions

