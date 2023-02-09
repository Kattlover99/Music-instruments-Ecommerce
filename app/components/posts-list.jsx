import Post from "./post";

export default function PostsList({ blog })
{
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {blog.map(post => (
                    <Post
                        post={post.attributes}
                        key={post.id}
                    />
                ))}
            </div>
        </>
    )
}
