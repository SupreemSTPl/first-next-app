import { useRouter } from "next/router"

const Blog = () => {
    const router = useRouter()
    return (
        <div>Blog : {router.query.slug}</div>
    )
}
export default Blog