import Head from 'next/head'

interface MetaProps {
  title: string
  desc?: string
  ogImage?: string
  canonical?: string
}

const Meta = ({
  title = "Rhema - Changing & Affecting Lives!",
  desc = "Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.",
  ogImage = "/img/og/home.jpg",
  canonical = "",
}: MetaProps) => (
  <Head>
    {/* Responsive meta tag */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <meta name="twitter:creator" content="" />
    <meta name="twitter:site" content="RCM" /> */}
    <meta name="description" content={desc} />
    <meta name="og:description" property="og:description" content={desc} />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="twitter:card" content={desc} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:title" content={title} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:site_name" content="Rhema - Changing & Affecting Lives!" />
    <meta property="og:type" content="website" />
    {canonical !== "" && <meta property="og:url" content={canonical} />}
    <title>{title}</title>
  </Head>
);
export default Meta
