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

    return <div className="card bg-dark-subtle text-dark-emphasis col-2 m-1" style={{"width": "18rem"}}>
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-truncate">{body}</p>
            <ListComments />
            <button className="card-link btn btn-success" onClick={() => addNewComment()}>Create Comment</button>
        </div>
    </div>
}