import Layout from "../components/Layout";
import { motion } from "framer-motion";
import IntroContent from "../components/IntroContent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Consulting & Web Development in Perth</title>
      </Head>
      <Layout>
        <motion.main>
          <IntroContent />
        </motion.main>
      </Layout>
    </>
  );
}
