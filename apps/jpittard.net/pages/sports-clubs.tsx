import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const SportsClubs = () => {
  return (
    <>
      <Head>
        <title>Sports Clubs Websites | jpittard.net</title>
      </Head>
      <Layout>
        <motion.main>
          <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24 pb-6">
            <h1 className="md:pt-12 py-6">Sports Clubs</h1>
          </div>
          <p>
            Last year I sat on a steering committee with the PFL where
            information was collected from all of the clubs in the organisation.
            The goal of this committee was to develop a consistent website for
            all of the clubs to use, that was easy for the clubs to operate or
            set and forget if they wish.
          </p>
          <p>
            Unfortunately, before the committee was formed the platform the
            websites were to be built on was determined. That’s where this
            WordPress theme comes in. The platform the clubs were put on was
            Squarespace, which has some benefits. However, there are far more
            cost-effective ways to do this where clubs still maintain all the
            benefits of Squarespace like
            <ul className="list-disc">
              <li>Drag and drop page builder</li>
              <li>Ease of use</li>
              <li>Can set and forget OR update content when they wish</li>
            </ul>
            With the added benefits of
            <ul className="list-disc">
              <li>You have control over YOUR website</li>
              <li>
                Can easily add additional features (WordPress powers more than
                40% of the web, you would have no trouble finding people to
                build features you don't have if they aren't already made as a
                plug-and-play option)
              </li>
              <li>Can also easily upgrade and make changes.</li>
              <li>
                The design has been created based on feedback from over 60 clubs
                and professional designers/developers.
              </li>
            </ul>
          </p>
        </motion.main>
      </Layout>
    </>
  );
};

export default SportsClubs;
