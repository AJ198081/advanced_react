import {ReactNode, useEffect, useMemo, useState} from "react";
import {Question, questions} from "../assets/data/questions.ts";
import {UserInput} from "./UserInput.tsx";

export interface EnrichedAnswers extends Question {
    answered: boolean;
    userAnswer: string;
}

interface QuizProps {
    quizTimedOut?: boolean,
    userInput: UserInput,
    setQuizTimeOut: (value: (((prevState: boolean) => boolean) | boolean)) => void
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

export const Quiz = ({quizTimedOut, userInput, setQuizTimeOut}: QuizProps): ReactNode => {

    const [answered, setAnswered] = useState<EnrichedAnswers[]>(questions
        .slice(0, userInput.numberOfQuestions)
        // .sort(() => Math.random() - 0.5) // Random shuffle the questions
        .map(question => ({
            ...question,
            // answers: question.answers.sort(() => Math.random() - 0.5),
            answers: shuffleArray(question.answers), // random shuffle the 'answers' in each question
            answered: false,
            userAnswer: ""
        } as EnrichedAnswers)));

    const [userScore, setUserScore] = useState<number | null>(null);

    const [incorrectAnswers, setIncorrectAnswers] = useState<EnrichedAnswers[]>([]);

    useEffect(() => {
        if (quizTimedOut) {
            setAnswered(prevState => {
                prevState.forEach(question => question.answered = true);
                return [...prevState]
            })
        }
    }, [quizTimedOut])

    const computeScore = (): void => {
        const correctAnswersCount = answered
            .filter((answer, index) => answer.userAnswer === answered[index].correctAnswer)
            .length;
        setUserScore(correctAnswersCount);
    }

    const calculateIncorrectQuestions = () => {
        setIncorrectAnswers(answered.filter(question => question.userAnswer !== question.correctAnswer));
    };

    if (answered.filter(question => !question.answered).length === 0) {
        setQuizTimeOut(true);
    }


    const renderIncorrectQuestions: ReactNode = useMemo(() => {
        return (
            <ul className="list-group list-group-item-info" style={{listStyle: "none"}}>
                {incorrectAnswers.filter(answer => answer.userAnswer !== answer.correctAnswer)
                    .map((answer) => (
                        <li key={answer.id} className="list-group-item bg-dark text-white">
                            <p><strong>Question:</strong> {answer.question}</p>
                            <p><strong>You answered:</strong> {answer.userAnswer}</p>
                            <p><strong>Correct answer is:</strong> {answer.correctAnswer}</p>
                        </li>
                    ))}
            </ul>
        );
    }, [incorrectAnswers]);


    return (
        <>
            {(answered.findIndex(answer => !answer.answered) !== -1)
                ? answered
                    .filter(question => !question.answered)
                    .map(((question, questionIndex) => (
                        <div id={"question"} className={"my-5 text-white"} key={question.id}>
                            <h2 className={"fs-1 text-center text-white-50"}>{question.question}</h2>
                            <ul id="answers">
                                {question.answers.map((answer, answerIndex) => (
                                    <div key={answerIndex} style={{width: "70%", margin: "0 auto"}}>
                                        <li className={"answer"}>
                                            <button className={"font-monospace fs-3 mx-auto "} onClick={() => {
                                                question.userAnswer = answer;
                                                question.answered = true;
                                                setAnswered(prevAnswers => {
                                                    prevAnswers[questionIndex] = question;
                                                    return [...prevAnswers];
                                                });
                                            }}>
                                                {answer}
                                            </button>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )))
                : <>
                    <img src={"/quiz-complete.png"} alt={"Quiz Completed Logo"} className="m-auto d-block img-fluid"
                         style={{width: '50%', maxWidth: '300px'}}/>
                    <div className="text-center">
                        <button className={"btn btn-dark my-5"} onClick={computeScore}>
                            Get your score
                        </button>
                        {userScore !== null &&
                            <p className={" d-block text-white mx-4 text-center display-6"}>
                                {userInput.name} scored : {((userScore / answered.length) * 100).toFixed(1)} %,
                                got {userScore} correct out of {answered.length}.
                            </p>
                        }
                    </div>
                    <div className="text-center">
                        <button className={"btn btn-dark my-5"} onClick={calculateIncorrectQuestions}>
                            Get incorrect answers
                        </button>
                        {incorrectAnswers.length !== 0 ? renderIncorrectQuestions : null}
                    </div>
                </>
            }
        </>
    );
}
