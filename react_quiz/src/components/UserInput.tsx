import {FormEvent, useRef} from "react";

export interface UserInput {
    name: string;
    numberOfQuestions: number;
    minutes: number;
}

interface UserInputProps {
    setUserInput: (userInput: UserInput) => void;
}

export const UserInput = ({setUserInput}: UserInputProps) => {

    const nameRef = useRef<HTMLInputElement | null>(null);
    const questionsRef = useRef<HTMLInputElement | null>(null);
    const minutesRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const name = nameRef.current?.value;
        const numberOfQuestions = questionsRef.current?.value;
        const minutes = minutesRef.current?.value;


        if (!(name && numberOfQuestions && minutes)) {
            alert('All fields are mandatory, please fill them in.');
        } else {
            const questionsInt = parseInt(numberOfQuestions);
            const minutesInt = parseInt(minutes);

            if (questionsInt <= 0 || minutesInt <= 0) {
                alert(
                    'Please enter a positive number for questions and minutes.'
                )
                return;
            }
            setUserInput({
                name,
                numberOfQuestions: questionsInt,
                minutes: minutesInt,
            });
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">Name</label>
                <input ref={nameRef} type="text" className="form-control" id="name" aria-describedby="userNameHelp"/>
                <div id="userNameHelp" className="form-text text-white">Name of the person taking quiz</div>
            </div>
            <div className="mb-3">
                <label htmlFor="numberOfQuestions" className="form-label text-white">Number of questions</label>
                <input ref={questionsRef} type="number" className="form-control" id="numberOfQuestions"
                       placeholder={"Enter questions"}
                       aria-describedby="questionHelp"/>
                <div id="questionHelp" className="form-text text-white">How many questions would you like to solve?
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="minutes" className="form-label text-white">Number of minutes</label>
                <input ref={minutesRef} type="number" className="form-control" id="minutes" placeholder="Enter minutes"
                       aria-describedby="numberOfQuestionsHelp"/>
                <div id="numberOfQuestionsHelp" className="form-text text-white">How many minutes you need to solve
                    these questions?
                </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '40%'}}>Submit</button>
        </form>
    )
}