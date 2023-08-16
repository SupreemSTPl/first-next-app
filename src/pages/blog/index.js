import Link from "next/link"

//getStaticProps

export const getStaticProps = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await result.json()

    return {
        props: {
            data,
        }
    }
}
const Blog = ({ data }) => {
    console.log("data", data);
    return (
        <>
            {data?.slice(0, 5)?.map((item) => <Link href={`/blog/${item?.id}`}><h1>{item?.title}</h1></Link>)}
        </>
    )
}
export default Blog