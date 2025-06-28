import { useState, useEffect } from "react"

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
    id: number,
    title: string,
    body: string
}

export default function Posts() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [ posts, setPosts] = useState<Post[]>([]);

    useEffect(() =>{
        const fetchPosts = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/posts`);
                const posts =await response.json() as Post[];
                setPosts(posts);
                } catch (error: any) {
                    setError(error.message)
                } finally  {
                    setIsLoading(false);
                } 
        };

        fetchPosts();
    }, []);
    
    if (isLoading) {
        return <div>Loading... </div>
    }

    if (error) {
        return <div>Data fetching failed</div>
    }

    return(
        <div style={{ textAlign: "center"}}>
            <h1>POSTS</h1>
            <ol style={{ listStylePosition: "inside", display: "inline-block", padding: 0 }}>
                {posts.map((post) => {
                    return <li key={post.id} style={{ textAlign: "center", margin: "0 0 10px 0", maxWidth: "90%" }}>
                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
                    </li>
                })}
            </ol>
        </div>
    );
}