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
// recoil js
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  return (
    <AuthContextProvider>
      <RecoilRoot>
        <Layout>
		      <Component {...pageProps} />      
        </Layout>
      </RecoilRoot>
    </AuthContextProvider>
  )
}

export default MyApp
