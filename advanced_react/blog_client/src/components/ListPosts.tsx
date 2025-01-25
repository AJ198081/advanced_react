import {Post} from "./Post.tsx";

export function ListPosts() {
    return <div>
        <Post key={1} title="Post 1" body="Post 1 body" />
    </div>
}