//getStaticPaths
export const getStaticPaths = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await result.json()

    const paths = data.map((ele) => {
        return {
            params: {
                productId: ele.id.toString()
            },
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    console.log("context", context);
    const id = context.params.productId
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
        <div>
            <h3>{data?.id}</h3>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}
export default Blog