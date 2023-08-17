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
            <h1>All the blogs

            </h1>
            {data?.slice(0, 5)?.map((item) => <Link href={`/blog/${item?.id}`}><h4>{item?.title}</h4></Link>)}
        </>
    )
}
export default Blog