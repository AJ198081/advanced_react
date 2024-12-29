import {Header} from "./components/Header.tsx";
import {Quiz} from "./components/Quiz.tsx";
import {ProgressBar} from "./components/ProgressBar.tsx";
import {useCallback, useState} from "react";
import {QUIZ_DURATION} from "./assets/data/questions.ts";

function App() {

    const [quizTimedOut, setQuizTimedOut] = useState(false);
    const [userName, setUserName] = useState<string | null>(null);


    const onQuizTimeOut = useCallback(() => {
        console.log("Quiz Time Out");
        setQuizTimedOut(true);
    }, [])

  return (
    <>
        <div className="fixed-top bg-dark py-2">
            <div className="container">
                <ProgressBar quizTime={QUIZ_DURATION * 60 * 1000} onQuizTimeOut={onQuizTimeOut}/>
            </div>
        </div>
        <Header userName={userName} setUserName={setUserName} />
        {userName && <Quiz quizTimedOut={quizTimedOut} />}
    </>
  )
}

export default App
