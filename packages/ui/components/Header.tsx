import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MobileMenu from "./Mobile-Menu";
import { HeaderProps } from "../utils/types/component-prop-types";
import { useRouter } from "next/router";

const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { uiLibrary } = props;

  const router = useRouter();

  const showLinks =
    router.pathname !== "/affordable-website-development-packages";

  console.log(showLinks);
  return (
    <header className="pt-3 lg:pt-24 py-3 px-2">
      <nav className=" py-3 px-2 max-w-[80%] lg:max-w-3xl mx-auto flex justify-between">
        {uiLibrary === "next" ? (
          <Link href={"/"} scroll={false} aria-label="go to home page">
            <Logo />
          </Link>
        ) : (
          <a href="/">
            <Logo />
          </a>
        )}
        {showLinks && (
          <ul className="flex gap-4 text-lg items-center justify-start">
            <li>
              {uiLibrary === "next" ? (
                <Link
                  className="hoverline hidden md:block "
                  href={"/blog"}
                  scroll={false}
                >
                  blog
                </Link>
              ) : (
                <a href="/blog" className="hoverline hidden md:block">
                  blog
                </a>
              )}
            </li>
            <li>
              {uiLibrary === "next" ? (
                <Link
                  className="hoverline hidden md:block"
                  href={"/store/diy-solutions"}
                >
                  tools
                </Link>
              ) : (
                <a
                  href="/store/diy-solutions"
                  className="hoverline hidden md:block"
                >
                  tools
                </a>
              )}
            </li>
            <li
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Hamburger isOpen={isMenuOpen} />
            </li>
          </ul>
        )}
      </nav>
      {isMenuOpen && <MobileMenu uiLibrary={props.uiLibrary} />}
    </header>
  );
};

export default Header;
