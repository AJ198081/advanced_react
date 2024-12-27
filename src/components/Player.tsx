import {useRef, useState} from "react";

export const Player = () => {

    const playerName = useRef<HTMLInputElement | null>(null);

    const [submittedName, setSubmittedName] = useState<string | undefined>(undefined);

    return (
        <section id="player">
            <h2>Welcome {submittedName ?? 'Unknown Entity'}</h2>
            <p>
                <input ref={playerName} type="text" name="name"/>
                <button onClick={() => setSubmittedName(playerName.current!.value)}>Set Name</button>
            </p>
        </section>
    );
}
