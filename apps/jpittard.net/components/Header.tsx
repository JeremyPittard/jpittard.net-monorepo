import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Humburger";
import Logo from "./Logo";
import MobileMenu from "./Mobile-Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="pt-3 lg:pt-24 py-3 px-2">
      <nav className=" py-3 px-2 max-w-[80%] lg:max-w-3xl mx-auto flex justify-between">
        <Link href={"/"} scroll={false} aria-label="go to home page">
          <Logo />
        </Link>
        <ul className="flex gap-4 text-lg items-center justify-start">
          <li>
            <Link
              className="hoverline hidden md:block"
              href={"/blog"}
              scroll={false}
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              className="hoverline hidden md:block"
              href={"/store/diy-solutions"}
            >
              tools
            </Link>
          </li>
          <li className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Hamburger isOpen={isMenuOpen} />
          </li>
        </ul>
      </nav>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
