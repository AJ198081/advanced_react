import {useState, FormEvent} from "react";
import {FormElement} from "../evergreen/FormElement.tsx";
import {FieldError} from "../types/FieldError";

interface Post {
    title: string,
    description: string,
}

export function PostCreate() {

    const [post, setPost] = useState<Post>({} as Post);
    const [errors, setErrors] = useState<FieldError[]>([]);

    const TITLE = "title";
    const DESCRIPTION = "description";

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const title = formData.get(TITLE) as string | null;
        if (title === null || title.trim() === "" || title.trim().length < 2) {
            setErrors(prevErrors => prevErrors
                .filter(err => err.field !== TITLE)
                .concat({field: TITLE, message: "Title should be at least 10 characters"} as FieldError)
            );
            return;
        }

        const description = formData.get(DESCRIPTION) as string | null;
        if (description === null || description.trim() === "" || description.trim().length < 4) {
            setErrors(prevErrors => prevErrors
                .filter(err => err.field !== DESCRIPTION)
                .concat({field: DESCRIPTION, message: "Description should be at least 50 characters"} as FieldError)
            );
            return;
        }

        if (errors.length === 0) {
            setPost(Object.fromEntries(formData.entries()) as unknown as Post);
            formData.delete(TITLE);
            formData.delete(DESCRIPTION);
        }
    };

    return <div>
        <form className={"w-50 my-0 mx-auto"} onSubmit={handleSubmit} encType={"multipart/form-data"}>
            <h1 className={"fs-2 text-primary"}>Create new post</h1>
            <FormElement name={TITLE}
                         type={"text"}
                         placeholder={"Enter title"}
                         valid_text={"Looks good!"}
                         invalid_text={"Title should be between 10 and 140 characters long"}
                         errors={errors}
                         setErrors={setErrors}/>

            <FormElement name={DESCRIPTION}
                         type={"textarea"}
                         placeholder={"Enter description"}
                         valid_text={"Looks good!"}
                         invalid_text={"Description should be at least 50 characters"}
                         errors={errors}
                         setErrors={setErrors}
                         rows={5}
            />


            <button type="submit" className="btn btn-info">Submit Post</button>
        </form>
    </div>
}