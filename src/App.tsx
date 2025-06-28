import { useState } from "react"

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
    id: Number;
    title: string
}

export default function API() {

    const [ posts, setPosts] = useState<Post[]>({});

    useEffect(() =>{
        const fetchPosts = async () => {
            const response = await fetch(`${BASE_URL}/posts`);
            const posts =await response.json() as ;
        };
    }, [])

    return(
        <div>
            <h1>POSTS</h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    );
}