import Head from 'next/head'

const Meta = ({ title, desc, ogImage, canonical }) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={desc} />
    <meta property='og:type' content='website' />
    <meta name='og:title' property='og:title' content={title} />
    <meta name='og:description' property='og:description' content={desc} />
    <meta property='og:site_name' content='RCM' />
    <meta property='og:url' content={canonical} />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={desc} />
    <meta name='twitter:site' content='RCM' />
    <meta name='twitter:creator' content='Roxanne' />
    <link rel='icon' type='image/png' href='/favicon.ico' />
    <link rel='apple-touch-icon' href='/favicon.ico' />
    <link rel='stylesheet' href='' />
    <meta property='og:image' content={ogImage || '/img/og/home.jpg'} />
    <meta name='twitter:image' content='' />
    <link rel='canonical' href={canonical} />
    <script type='text/javascript' src=''></script>
  </Head>
)
export default Meta
