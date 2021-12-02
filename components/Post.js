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
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, doc, setDoc } from "@firebase/firestore"

import { useSession } from "next-auth/react"
import Moment from "react-moment"

function Post({ id, userName, userImg, postImg, caption }) {

    // state for input val
    const [comment, setComment] = useState("")

    // state to fetch comments from firestore
    const [comments, setComments] = useState([])

    const { data: session } = useSession()

    // useEffect to add comments to firestore
    useEffect(() => {
        const q = query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc"))
        const querySnapShot = onSnapshot(q, (snapshot) => {
            setComments(snapshot.docs)
        })
        return querySnapShot
    }, [db])

    // addComments to firestore
    const sendComment = async (event) => {
        event.preventDefault()

        const sendToComment = comment

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: sendToComment,
            username: session.user.name,
            userProfileImg: session.user.image,
            timestamp: serverTimestamp()
        })
        setComment("")
    }

    return (
        <div className="bg-white my-7 border">
            <div className="flex items-center p-5">
                <img src={userImg} alt="dp" className="rounded-full h-11 w-11 object-contain border p-1 mr-3 " />
                <p className="font-bold flex-1 capitalize">{userName}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            <img src={postImg} alt="happening..." className="object-cover w-full" />

            <div className="flex justify-between mt-4 mx-4">
                <div className="flex space-x-4" >
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

            {/* Comment section */}
            <div className=" ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
                {comments.map((comment) => (
                    <div className="flex" key={comment.id}>

                        <img className="flex items-center space-x-2 mb-3 h-6 w-6 rounded-full"
                            src={comment.data().userProfileImg}
                            alt="d"
                        />

                        <p className="text-sm flex-1 ml-2">
                            <span className="font-semibold">
                                {comment.data().username}
                            </span>
                            {" "}
                            {comment.data().comment}
                        </p>

                        <Moment fromNow className="pr-5 text-xs">
                            {comment.data().timestamp?.toDate()}
                        </Moment>
                    </div>
                ))}
            </div>

            {/* comment input field */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7 btn" />

                <input
                    placeholder="Add a comment"
                    className="border-none flex-1 focus:ring-0 outline-none"
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button type="submit" className="font-semibold text-blue-400" disabled={!comment.trim()} onClick={sendComment}>
                    Post
                </button>
            </form>
        </div>

    )
}

export default Post
