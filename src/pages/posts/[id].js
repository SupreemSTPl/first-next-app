import Link from "next/link"

const { useRouter } = require("next/router")

const Post = () => {
    const router = useRouter()
    return (
        <>
            <div>This is post {router.query.id} page </div>
            <br />
            <br />
            <br />
            <br />
            <Link href="/posts">Back to posts page</Link>
        </>
    )
}
export default Post