import {ChangeEvent, FormEvent, ReactNode, useState} from "react";
import validator from 'validator';

export interface FormData {
    email: string,
    password: string,
}

export function Login(): ReactNode {

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    })

    const [error, setError] = useState<FormData | null>(null);

    const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    };

    const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Unvalidated FormData ${formData.email} ${formData.password}`);

        if (!validator.isEmail(formData.email)) {
            console.log(formData.email);
            setError(prevState => {
                return {
                    ...prevState,
                    email: "Invalid email address",
                    password: prevState?.password || ""
                }
            });
        }

        const passwordStrengthScore = validator.isStrongPassword(formData.password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: true
        });

        console.log(passwordStrengthScore);

        if (!validator.isAlphanumeric(formData.password) && passwordStrengthScore) {
            console.log(formData.password);
            setError(prevState => {
                return {
                    ...prevState,
                    email: prevState?.email || "",
                    password: "Invalid password, can only contain letters and numbers"
                }
            });
        }
        console.log(`Submitted: ${formData.email} ${formData.password}`)
    }

    if (error !== null) {
        console.log(`Error: ${error.email} ${error.password}`)
    }

    const resetFormData = () => {

        console.log("Resetting form data");
        setFormData({email: '', password: ''} as FormData);
        setError(null);
    };
    return (
        <form onSubmit={handleFormSubmission} onReset={resetFormData}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={formData.email}
                           onChange={handleFormData}/>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" value={formData.password}
                           onChange={handleFormData}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat" type={"reset"}>Reset</button>
                <button className="button" type={"submit"}>Login</button>
            </p>
        </form>
    );
}