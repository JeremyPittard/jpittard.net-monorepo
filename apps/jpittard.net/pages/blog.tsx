import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

const Blog = () => {
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <Layout>
        <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24 pb-6">
          <h1 className="md:pt-12 py-6">Blog</h1>

          <span className="font-bold text-neon-pink block py-6">
            Coming Soon...
          </span>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
