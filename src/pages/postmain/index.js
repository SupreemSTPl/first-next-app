const { default: Link } = require("next/link")

const Posts = () => {
    return (
        <ul>
            <li>
                <Link href={`/posts/${encodeURIComponent(1)}`}>Post 1</Link>
            </li>
            <li>
                <Link href={`/posts/${encodeURIComponent(3)}`}>Post 3</Link>
            </li>
            <li>
                <Link href={`/posts/${encodeURIComponent(7)}`}>Post 7</Link>
            </li>
        </ul>
    )
}
export default Posts