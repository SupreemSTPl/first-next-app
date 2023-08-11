const { useRouter } = require("next/router")
import Link from "next/link"
function Student() {
    const router = useRouter()
    return (
        <>
            <h1>Student {router.query.slug}</h1>
            <br />
            <br />
            <br />
            <br />
            <Link href="/students">Back to students page</Link>
        </>
    )
}
export default Student