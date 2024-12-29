import {useRef, KeyboardEvent} from "react";

interface HeaderProps {
    userName: string | null;
    setUserName: (userName: string | null) => void;
}

export const Header = ({userName, setUserName}: HeaderProps) => {

    const inputRef = useRef<HTMLInputElement | null>(null);


    const updateUserName = () => {
        const enteredUserName = inputRef.current?.value;

        if (enteredUserName) {
            setUserName(enteredUserName);
        }
    };

    return <>
        <header>
            <img src="/quiz-logo.png" className={"my-3"} alt="Quiz Logo"/>
            {userName === null ? <div>
                    <div style={{width: "50%", margin: "0 auto"}}>
                        <input type="text"
                               ref={inputRef}
                               className={"form-control my-3"}
                               placeholder="Enter your name"
                               onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                                   if (event.key === 'Enter') {
                                       updateUserName();
                                   }
                               }}
                        />
                        <button className={"btn btn-success m-2"}
                                onClick={updateUserName}>
                            Submit name
                        </button>
                    </div>
                </div>
                : userName && <h1> Quiz for {userName}</h1>}
        </header>
    </>

}