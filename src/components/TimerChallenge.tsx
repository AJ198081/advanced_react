import {MutableRefObject, useRef, useState} from "react";
import {ForwardedRefProps, ResultModal} from "./ResultModal.tsx";

interface TimerChallengeProps {
    title: string;
    targetTime: number;
}

export const TimerChallenge = ({title, targetTime}: TimerChallengeProps) => {

    const [timerExpired, setTimerExpired] = useState<boolean>(false);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);

    const challengeTimer = useRef<number | null>(null);
    const modalRef = useRef<ForwardedRefProps>(null);

    const handleStartChallenge = () => {
        challengeTimer.current = setTimeout(() => {
            setTimerStarted(false);
            setTimerExpired(true);
            modalRef.current?.open();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    const handleStopChallenge = () => {
        if (challengeTimer.current && !timerExpired) {
            clearTimeout(challengeTimer.current);
        }
        setTimerExpired(false);
        setTimerStarted(false);
    }

    return <>
        <ResultModal result={32} targetTime={targetTime} ref={modalRef}/>
        <section className="challenge">
            <h2>{title}</h2>
            {/*{timerExpired && <p>Time's up!</p>}*/}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button
                    onClick={timerStarted ? handleStopChallenge : handleStartChallenge}>{`${timerStarted ? 'Stop' : 'Start'} Challenge`}</button>
            </p>
            <p className={`${timerStarted ? 'active' : undefined}`}>
                {timerStarted ? 'Challenge started' : 'Timer inactive'}
            </p>
        </section>
    </>
}