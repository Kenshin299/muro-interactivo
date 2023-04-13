import PostCard from "./Postcard";

function PostContainer(data) {
    return (
        <div className="PostList">
            <PostCard data={data}/>
        </div>
    )
}

export default PostContainer;