import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
}
    from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

function Post({ id, userName, userImg, postImg, caption }) {
    return (
        <div className="bg-white my-7 border">
            <div className="flex items-center p-5">
                <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
                <p className="font-bold flex-1">{userName}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            <img src={postImg} alt="Error" className="object-cover w-full" />

            <div className="flex justify-between mt-4 mx-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn" />
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
                <input placeholder="Add a comment" className="border-none flex-1 focus:ring-0 outline-none" type="text" />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>

    )
}

export default Post
