import Head from "next/head";
import React, { FormEvent, useState } from "react";
import Layout from "../../components/Layout";

const DiySolutions = () => {
  return (
    <>
      <Head>
        <title>tools</title>
      </Head>
      <Layout>
        <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24 pb-6">
          <h1 className="md:pt-12 py-6">DIY Tools</h1>

          <p className="py-6">
            Printable workbooks, guides and templates to help improve your sites
            accessibility, core web vitals and SEO with no code.
          </p>
          <span className="font-bold text-neon-pink block py-6">
            Coming Soon...
          </span>
        </div>
      </Layout>
    </>
  );
};

export default DiySolutions;
