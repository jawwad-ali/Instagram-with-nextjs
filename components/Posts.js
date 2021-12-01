import Post from "./Post"
import { useState, useEffect } from "react"
import { db } from "../firebase"
import { getDocs, query, collection, onSnapshot, orderBy } from "@firebase/firestore"

function Posts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))
        const querySnapShot = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs)
        })
        return querySnapShot
    }, [db])

    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    userName={post.data().username}
                    userImg={post.data().userProfileImg}
                    postImg={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    )
}

export default Posts
