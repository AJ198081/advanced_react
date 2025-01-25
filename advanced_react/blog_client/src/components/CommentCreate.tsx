import {FormElement} from "../evergreen/FormElement.tsx";

interface CommentCreateProps {
    postId: number,
}

export function CommentCreate( {postId}: CommentCreateProps) {



    return <form>
        <FormElement type={"text"}
                     placeholder={"Add comment"}
                     name={"comment"}
                     title={"Add comment"}
                     invalid_text={"Comment should be at least 20 character"}
                     valid_text={"Looks good!"}
                     resetErrors={() => {}}
                     errors={[]}
        />
    </form>
}