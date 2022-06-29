import Layout from '../components/Layout'
// styles
import '../styles/nprogress.css'
import '../styles/index.css'
// auth
import { useRouter } from 'next/router'
import { AuthContextProvider } from '../context/AuthContext'
// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <AuthContextProvider>
        <Layout>
			<Component {...pageProps} />
        </Layout>
    </AuthContextProvider>
  )
}

export default MyApp
