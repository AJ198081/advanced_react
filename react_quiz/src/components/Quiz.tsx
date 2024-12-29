import {ReactNode, useEffect, useState} from "react";
import {Question, mathQuestions} from "../assets/data/questions.ts";

export interface EnrichedAnswers extends Question {
    answered: boolean;
    userAnswer: string;
}

//TODO (left on 29/12/2024): Better for shuffling arrays
const shuffleArray = <T, >(array: T[]): T[] => {
    const copiedArray = [...array];
    for (let i = 0; i < copiedArray.length; i++) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]]; // Swap elements
    }
    return copiedArray;
};

interface QuizProps {
    quizTimedOut?: boolean
}

export const Quiz = ({quizTimedOut}: QuizProps): ReactNode => {

    const [answered, setAnswered] = useState<EnrichedAnswers[]>(mathQuestions.map(question => ({
        ...question,
        // answers: question.answers.sort(() => Math.random() - 0.5),
        answers: shuffleArray(question.answers),
        answered: false,
        userAnswer: ""
    })) as EnrichedAnswers[]);

    const [userScore, setUserScore] = useState<number | null>(null)

    useEffect(() => {
        if (quizTimedOut) {
            setAnswered(prevState => {
                prevState.forEach(question => question.answered = true);
                return [...prevState]
            })
        }
    }, [quizTimedOut])

    const computeScore = (): void => {
        setUserScore(answered
            .filter((question, index) => question.userAnswer === mathQuestions[index].correctAnswer)
            .length);

    }

    return (
        <>
            {answered.findIndex(answer => !answer.answered) !== -1
                ? answered
                    .filter(question => !question.answered)
                    .map(question => (<div id={"question"} className={"my-5 text-white"} key={question.id}>
                            <h2>{question.text}</h2>
                            <ul id="answers">
                                {question.answers.map((answer, qIndex) => (<li key={answer} className={"answer"}>
                                        <button className={"font-monospace fw-bold"} onClick={() => {
                                            question.userAnswer = answer;
                                            question.answered = true;
                                            setAnswered(prevAnswers => {
                                                prevAnswers[qIndex] = question;
                                                return [...prevAnswers];
                                            });
                                        }}>
                                            {answer}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                :
                <>
                    <img src={"/quiz-complete.png"} alt={"Quiz Completed Logo"} className="m-auto d-block img-fluid"
                         style={{width: '50%', maxWidth: '300px'}}/>
                    <div className="text-center">
                        <button className={"btn btn-dark my-5"} onClick={() => computeScore()}>
                            Get your score
                        </button>
                        {userScore !== null &&
                            <p className={" d-block text-white mx-4 text-center display-6"}>
                                You scored : {userScore}
                            </p>
                        }
                    </div>
                </>
            }
        </>
    )
}
