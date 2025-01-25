import {Post} from "./Post.tsx";
import {PostType} from "../types/Types.ts";

interface PostProps {
    posts: PostType[]
}


export function ListPosts({posts}: PostProps) {

    return <div className="container d-flex row">
        { posts.length > 0 && posts.map( post =>
            <Post key={post.id} title={post.title} body={post.description}/>
        )}
    </div>
}