import {useState} from 'react'
import {useContext} from 'react'
import { QuizContext } from '../#helpers/Contexts'
import { questions } from '../#helpers/QuestionBank'

const Quiz = () => {

    const {score, setScore, setGameState} = useContext(QuizContext)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')

    const nextQuestion = () => {

        if (questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
        } 
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {

        if (questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
        } 

        setGameState('endScreen')
    }

    return (
        <div className="Quiz">
            <h1>{questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen('A')}>{questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen('B')}>{questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen('C')}>{questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen('D')}>{questions[currentQuestion].optionD}</button>
            </div>

            {currentQuestion === questions.length - 1 ? <button onClick={finishQuiz}>Finish Quiz</button> : <button onClick={nextQuestion}>Next</button>}
            
        </div>
    )
}

export default Quiz
