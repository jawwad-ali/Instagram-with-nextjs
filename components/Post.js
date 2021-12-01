import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    PaperAirplaneIcon
}
    from "@heroicons/react/outline"
import { useState, useEffect } from "react"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { db } from "../firebase"
import { query, collection, onSnapshot, orderBy, collectionGroup, getDocs } from "@firebase/firestore"
import { useSession } from "next-auth/react"

function Post({ id, userName, userImg, postImg, caption }) {

    // state to add comments to firestore
    const [comments, setComments] = useState([])
    // comments input value 
    const [comment, setComment] = useState("")
    const { data: session } = useSession()

    // add comment to post
    const sendComment = async (e) => {
        e.perventDefault()
        const sendToComment = comment
        setComment("")

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: sendToComment,
            username: session.user.name,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

    // getting to the comments collection 
    useEffect(async () => {
        const q = query(collectionGroup(db, "comments"))
        const querySnapshot = onSnapshot(q, (snapshot) => {
            setComments(snapshot.docs)
        })
        return querySnapshot
    }, [db])
    console.log(comments)

    return (
        <div className="bg-white my-7 border">
            <div className="flex items-center p-5">
                <img src={userImg} alt="dp" className="rounded-full h-11 w-11 object-contain border p-1 mr-3 " />
                <p className="font-bold flex-1 capitalize">{userName}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            <img src={postImg} alt="happening..." className="object-cover w-full" />

            <div className="flex justify-between mt-4 mx-4">
                <div className="flex space-x-4">
                    <HeartIconFilled className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>
                <div>
                    <BookmarkIcon className="btn" />
                </div>
            </div>
            <p className="p-5 truncate">
                <span className="font-bold">{userName} </span>
                {caption}
            </p>
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7 btn" />

                <input
                    placeholder="Add a comment"
                    className="border-none flex-1 focus:ring-0 outline-none"
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button type="submit" className="font-semibold text-blue-400"
                    onClick={sendComment}
                    disabled={!comment.trim()}>
                    Post
                </button>
            </form>
        </div>

    )
}

export default Post
