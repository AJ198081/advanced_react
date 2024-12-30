import {useEffect, useState} from "react";

interface ProgressBarProps {
    quizTime: number;
    onQuizTimeOut: () => void;
}

const UPDATE_INTERVAL = 10;
export const ProgressBar = ({quizTime, onQuizTimeOut}: ProgressBarProps) => {

    const [remainingTime, setRemainingTime] = useState<number>(quizTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevState => prevState - UPDATE_INTERVAL);
        }, UPDATE_INTERVAL);

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(onQuizTimeOut, quizTime);

        return () => clearTimeout(timeoutId);
    }, [quizTime, onQuizTimeOut]);


    return (
        <>
            <div
                className="progress bg-danger position-fixed"
                style={{width: '20px', height: '100%', right: 0, top: 0}}
            >
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{height: `${(remainingTime / quizTime) * 100}%`, width: '100%'}}
                    aria-valuenow={(remainingTime / quizTime) * 100}
                    aria-valuemin={0}
                    aria-valuemax={100}>
                </div>
            </div>
            <div
                className="progress-bar"
                role="progressbar"
                style={{width: `${(remainingTime / quizTime) * 100}%`}}
                aria-valuenow={(remainingTime / quizTime) * 100}
                aria-valuemin={0}
                aria-valuemax={100}>
            </div>
        </>
    )

}