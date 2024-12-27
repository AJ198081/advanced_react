import {RefObject, useRef, useState} from "react";
import ResultModal, {ForwardedRefProps} from "./ResultModal.tsx";

interface TimerChallengeProps {
    title: string;
    targetTime: number;
}

export const TimerChallenge = ({title, targetTime}: TimerChallengeProps) => {

    const [timeRemaining, setTimeRemaining] = useState<number>(targetTime * 1000);

    const challengeTimer = useRef<number | null>(null);
    const modalRef: RefObject<ForwardedRefProps> = useRef<ForwardedRefProps>(null);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(challengeTimer.current!);
        modalRef.current?.open();
    }

    const handleStartChallenge = () => {
        challengeTimer.current = setInterval(() => {
            setTimeRemaining(prevState => {
                return prevState - 10;
            });
        }, 10);
    }

    const handleStopChallenge = () => {
        if (challengeTimer.current && timerIsActive) {
            clearInterval(challengeTimer.current);
            modalRef.current?.open();
        }
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    return <>
        <ResultModal result={timeRemaining} targetTime={targetTime} handleRest={handleReset} ref={modalRef}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}>
                    {`${timerIsActive ? 'Stop' : 'Start'} Challenge`}
                </button>
            </p>
            <p className={`${timerIsActive ? 'active' : undefined}`}>
                {timerIsActive ? 'Challenge started' : 'Timer inactive'}
            </p>
        </section>
    </>
}