import "styles/_variables.css";
import "styles/GlobalStyle";

import { useEffect, useState } from "react";

import Layout from "components/common/Layout";
import { motion } from "framer-motion";
import { AppProps } from "next/dist/shared/lib/router/router";
import GlobalStyle from "styles/GlobalStyle";

// import SurveyModal from 'components/common/Modals/HomeModal'
// chatbot

function MyApp({ Component, pageProps, router }: AppProps) {
  const [openModal, setOpenModal] = useState(false);
  const AnyComponent = Component as any;

  useEffect(() => {
    const showModal = setTimeout(() => {
      setOpenModal(true);
    }, 30000);

    return () => {
      clearTimeout(showModal);
    };
  }, []);

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
