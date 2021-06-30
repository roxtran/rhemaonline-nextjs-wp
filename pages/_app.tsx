import Head from 'next/head'
import '../styles/_variables.css'
import '../styles/GlobalStyle'
import GlobalStyle from '../styles/GlobalStyle'
import Layout from '../components/common/Layout'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { useState, useEffect } from 'react'
import HomeModal from '../components/common/Modals/HomeModal'

function MyApp({ Component, pageProps }: AppProps) {
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const showModal = setTimeout(() => {
      setOpenModal(true)
    }, 30000)

    return () => {
      clearTimeout(showModal)
    }
  }, [])

  return (
    <>
      <Head>
        {/* Responsive meta tag */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* bootstrap CDN */}
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1'
          crossOrigin='anonymous'
        />
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <Layout>
        <HomeModal openModal={openModal} setOpenModal={setOpenModal} />
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default MyApp
