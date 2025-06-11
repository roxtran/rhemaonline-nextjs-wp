import Head from "next/head";

interface MetaProps {
  title: string;
  desc?: string;
  ogImage?: string;
  canonical?: string;
}

const Meta = ({
  title = "Rhema - Changing & Affecting Lives!",
  desc = "Welcome to Rhema Christian Ministries, a vibrant Spirit-filled church community designed to connect people to Jesus and to each other through authentic relationships.",
  ogImage = "/img/og/home.jpg",
  canonical = process.env.HOME_URL,
}: MetaProps) => (
  <Head>
    {/* Responsive meta tag */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:title" content={`${title} - Rhema - Changing & Affecting Lives!`} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage?.includes("http") ? ogImage : process.env.HOME_URL + ogImage} />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="300" />
    <meta property="og:image:alt" content={`${title} - Rhema - Changing & Affecting Lives!`} />
    <meta property="og:description" content={desc} />
    <meta property="og:site_name" content="Rhema - Changing & Affecting Lives!" />
    <title>{`${title} - Rhema - Changing & Affecting Lives!`}</title>
  </Head>
);
export default Meta;
