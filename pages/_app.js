import Layout from '../components/Layout'
// styles
import '../styles/nprogress.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
