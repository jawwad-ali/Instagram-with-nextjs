import Post from "./Post"

const DUMMY_DATA = [
    {
        id: "123",
        userName: "Ali Jawwad",
        userImg: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
        postImg: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85",
        caption: "What is happening"
    },
    {
        id: "456",
        userName: "Babar Azam",
        userImg: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png",
        postImg: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85",
        caption: "My second Instagram post"
    }
]

function Posts() {
    return (
        <div>
            {DUMMY_DATA.map((post) => (
                <Post
                    key={post.id}
                    userName={post.userName}
                    userImg={post.userImg}
                    postImg={post.postImg}
                    caption={post.caption}
                />
            ))}
        </div>
    )
}

export default Posts
