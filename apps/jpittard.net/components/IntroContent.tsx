/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

const IntroContent = () => {
  return (
    <>
      <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24">
        <h1 className="md:pt-12 py-6">Hey, I'm JP.</h1>

        <p className="py-6">
          I'm a{" "}
          <span className="text-neon-pink font-bold">front-end developer</span>
          &nbsp;who believes in&nbsp;
          <span className="text-neon-blue">
            collaboration, culture and community
          </span>
          .
        </p>
        <p className="py-6">more coming soon...</p>
        <p className="py-6">
          <Link
            href={`mailto:jeremy@jpittard.net`}
            className="font-bold text-neon-green hoverline"
          >
            get in touch.
          </Link>
        </p>
      </div>
    </>
  );
};

export default IntroContent;
