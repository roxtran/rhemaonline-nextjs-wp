import '../styles/_variables.css'
import '../styles/GlobalStyle'
import GlobalStyle from '../styles/GlobalStyle'
import Layout from '../components/common/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default MyApp
