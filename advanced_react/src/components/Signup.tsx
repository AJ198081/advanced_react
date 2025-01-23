import {FormEvent, ReactNode, useState} from "react";

export interface ObjectType {
    [key: string]: string | string[] | number | Date | undefined;
}

export const Signup = (): ReactNode => {

    const [error, setError] = useState<ObjectType | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const formData = new FormData((e.target as HTMLFormElement));

        console.log(formData);

        if (formData.get('password') !== formData.get('confirm-password')) {
            setError({password: 'Password and confirm password do not match'});
        }

       /* const acquisitionChannel = formData.getAll('acquisition');

        const formEntries = Object.fromEntries(formData.entries());
        for (const entry of formData.keys()) {
            if (formData.getAll(entry).length > 1) {
                console.log({...formEntries, [entry]: formData.getAll(entry)})
            }
        }
        const enrichedFormData = {...Object.fromEntries(formData.entries()), acquisition: acquisitionChannel};
        console.log(enrichedFormData);*/
        (e.target as HTMLFormElement).reset();

    };

    if (error !== null) console.log(error);


    return (
        <form onSubmit={handleSubmit}>
            <h2>Welcome on board!</h2>
            <p>We just need a little bit of data from you to get you started 🚀</p>
            <div className="control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
            </div>
            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </div>

                <div className="control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        name="confirm-password"
                    />
                </div>
            </div>
            <hr />
            <div className="control-row">
                <div className="control">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" />
                </div>

                <div className="control">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" />
                </div>
            </div>

            <div className="control">
                <label htmlFor="phone">What best describes your role?</label>
                <select id="role" name="role">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                    <option value="founder">Founder</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <fieldset>
                <legend>How did you find us?</legend>
                <div className="control">
                    <input
                        type="checkbox"
                        id="google"
                        name="acquisition"
                        value="google"
                    />
                    <label htmlFor="google">Google</label>
                </div>

                <div className="control">
                    <input
                        type="checkbox"
                        id="friend"
                        name="acquisition"
                        value="friend"
                    />
                    <label htmlFor="friend">Referred by friend</label>
                </div>

                <div className="control">
                    <input type="checkbox" id="other" name="acquisition" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
            </fieldset>

            <div className="control">
                <label htmlFor="terms-and-conditions">
                    <input type="checkbox" id="terms-and-conditions" name="terms" />I
                    agree to the terms and conditions
                </label>
            </div>

            <p className="form-actions">
                <button type="reset" className="button button-flat">
                    Reset
                </button>
                <button type="submit" className="button">
                    Sign up
                </button>
            </p>
        </form>
    );
}