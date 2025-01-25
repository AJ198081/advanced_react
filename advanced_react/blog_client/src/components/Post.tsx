import {ReactNode} from "react";
import {ListComments} from "./ListComments.tsx";
import {CommentCreate} from "./CommentCreate.tsx";

interface PostProps {
    title: string,
    body: string,
}
export function Post({title, body}: PostProps): ReactNode {

    const addNewComment = () => {
        return <CommentCreate />
    }

    return <div className="card bg-dark-subtle text-dark-emphasis" style={{"width": "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <ListComments />
            <button className="card-link btn btn-success" onClick={() => addNewComment()}>Create Comment</button>
        </div>
    </div>
}