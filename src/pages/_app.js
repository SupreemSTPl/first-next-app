import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log("hello js");
  return <Component {...pageProps} />
}
