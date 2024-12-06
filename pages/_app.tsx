import "styles/_variables.css";
import "styles/GlobalStyle";

import Layout from "components/common/Layout";
import { motion } from "framer-motion";
import { AppProps } from "next/dist/shared/lib/router/router";
import GlobalStyle from "styles/GlobalStyle";

// chatbot

function MyApp({ Component, pageProps, router }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <Layout>
      <GlobalStyle />
      <motion.main key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
        <AnyComponent {...pageProps} />
        {/* <Chatbot /> */}
      </motion.main>
    </Layout>
  );
}

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default MyApp;
