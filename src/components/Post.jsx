import './Post.css'

export default function Post({post}) {
    return (
        <div className="post-container">
            <div className="title-row">
                <span className="user-name">{post.userName}</span>
                <span className="post-time">{post.date.toLocaleString()}</span>
            </div>

            <p className="post-content">
                {post.content}
            </p>
        </div>
    )
}