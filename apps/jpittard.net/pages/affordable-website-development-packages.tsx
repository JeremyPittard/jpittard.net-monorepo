/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import accountantDoggo from "../assets/accountant-doggo.jpg";
import Link from "next/link";

const WebsiteDevelopmentOfferPage = () => {
  return (
    <Layout>
      <motion.main>
        <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24">
          <img
            src={accountantDoggo.src}
            alt="a badly photoshopped sammoyed head onto an accountant sitting at a desk counting coins"
            className="mb-8"
          />
          <p>
            I see you are interested in helping me with my taxman problem. Or
            the puppy - it was probably the puppy.
          </p>
          <p>click below to get in contact </p>
          <p className="py-6">
            <Link
              href={`mailto:jeremy@jpittard.net?subject=taxman and puppy deal`}
              className="font-bold text-neon-green hoverline"
            >
              get in touch.
            </Link>
          </p>
        </div>
      </motion.main>
    </Layout>
  );
};

export default WebsiteDevelopmentOfferPage;
