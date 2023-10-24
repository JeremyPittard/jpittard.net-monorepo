import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <motion.nav
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -5, opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <ul className="flex-col gap-4 text-lg items-center justify-start max-w-[80%] mx-auto">
        <li>
          <Link
            className="hoverline block font-display text-2xl py-3 px-4 font-bold"
            href={"/store/diy-solutions"}
          >
            tools
          </Link>
        </li>
        <li>
          <Link
            className="hoverline block font-display text-2xl py-3 px-4 font-bold"
            href={"/blog"}
            scroll={false}
          >
            blog
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default MobileMenu;
