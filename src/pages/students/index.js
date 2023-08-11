const { default: Link } = require("next/link")

const Student = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href={{ pathname: '/students/[slug]', query: { slug: 1 } }}>Student 1</Link>
                </li>
                <li>
                    <Link href={{ pathname: '/students/[slug]', query: { slug: 3 } }}>Student 3</Link>
                </li>
                <li>
                    <Link href={{ pathname: '/students/[slug]', query: { slug: 7 } }}>Student 7</Link>
                </li>
            </ul>

        </>
    )
}
export default Student