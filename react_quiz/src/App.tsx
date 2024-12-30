import {Header} from "./components/Header.tsx";
import {Quiz} from "./components/Quiz.tsx";
import {ProgressBar} from "./components/ProgressBar.tsx";
import {useCallback, useState} from "react";
import {UserInput} from "./components/UserInput.tsx";

function App() {

    const [quizTimedOut, setQuizTimedOut] = useState(false);
    const [userInput, setUserInput] = useState<UserInput>({
        name: '',
        numberOfQuestions: 0,
        minutes: 0,
    });
    const onQuizTimeOut = useCallback(() => {
        console.log('Quiz timed out');
        setQuizTimedOut(true);
    }, []);

    return (
        <>
            <div className="fixed-top bg-dark py-2">
                <div className="container">
                    {userInput.minutes && !quizTimedOut &&
                        <ProgressBar quizTime={userInput.minutes * 60 * 1000} onQuizTimeOut={onQuizTimeOut}/>}
                </div>
            </div>
            <Header userName={userInput.name}/>
            {userInput.name === '' && <UserInput setUserInput={setUserInput}/>}
            {userInput.numberOfQuestions && <Quiz quizTimedOut={quizTimedOut} setQuizTimeOut={setQuizTimedOut} userInput={userInput}/>}
        </>
    )
}

export default App
