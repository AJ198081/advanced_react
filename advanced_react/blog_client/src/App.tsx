import {PostCreate} from "./components/PostCreate.tsx";
import {ListPosts} from "./components/ListPosts.tsx";
import {AxiosInstance} from "./services/AxiosInstance.ts";
import {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {PostType} from "./types/Types.ts";

function App() {
    const [posts, setPosts] = useState<PostType[]>([] as PostType[]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postResponse = await AxiosInstance.get("/posts") as AxiosResponse<PostType[]>;

            if (postResponse.status === 200) {
                console.log(`postResponse.data => ${postResponse.data}`);
                setPosts(postResponse.data);
            }
        }
        void fetchPosts();
    }, [])

    return (<>
            <div className="container">
                <PostCreate updatePosts={setPosts}/>
            </div>
            <div className={"container d-flex mt-5"}>
                <ListPosts posts={posts} />
            </div>
        </>
    )
}

export default App
