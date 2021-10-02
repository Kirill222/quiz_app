import {useContext} from 'react'
import { QuizContext } from '../#helpers/Contexts'
import { questions } from '../#helpers/QuestionBank'

const EndScreen = () => {

    const {score, setScore, setGameState} = useContext(QuizContext)

    const goBackToMenu = () => {
        setScore(0)
        setGameState('menu')
    }

    return (
        <div className="end_screen">
            <h1>{`You answered ${score} out of ${questions.length}`}</h1>
            <button onClick={goBackToMenu}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen
