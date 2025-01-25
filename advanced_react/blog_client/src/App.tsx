import {PostCreate} from "./components/PostCreate.tsx";
import {ListPosts} from "./components/ListPosts.tsx";

function App() {

    return (<>
            <div className="container">
                <PostCreate/>
            </div>
            <div className={"container d-flex mt-5"}>
                <ListPosts/>
            </div>
        </>
    )
}

export default App
