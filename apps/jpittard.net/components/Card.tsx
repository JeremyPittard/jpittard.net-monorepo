import Link from "next/link";
import Image from "next/image";

interface cardProps {
  title: string;
  children?: React.ReactNode;
  img?: string;
  bgClass?: "bg-neon-green" | "bg-neon-pink" | "bg-neon-blue";
  link?: string;
  linkTarget?: "self" | "top" | "parent" | "blank";
}
interface linkProps {
  children?: React.ReactNode;
  link?: string;
  linkTarget?: "self" | "top" | "parent" | "blank";
}

const Card = ({
  children,
  title,
  bgClass = "bg-neon-pink",
  link,
  linkTarget = "self",
}: cardProps) => {
  let highlightClass = "shadow-neon-pink-50";
  let titleTextColor = "text-neon-pink-900";

  switch (bgClass) {
    case "bg-neon-pink":
      highlightClass = "hover:shadow-neon-pink-50";
      titleTextColor = "text-neon-pink-900";
      break;
    case "bg-neon-blue":
      highlightClass = "hover:shadow-neon-blue-50";
      titleTextColor = "text-neon-blue-900";
      break;
    case "bg-neon-green":
      highlightClass = "hover:shadow-neon-green-50";
      titleTextColor = "text-neon-green-900";
      break;

    default:
      break;
  }

  return (
    <article
      className={`card md:w-[30%] pb-3 ${highlightClass} hover:shadow-md hover:-translate-y-1 text-xl mb-4`}
    >
      <LinkWrap link={link} linkTarget={linkTarget}>
        <h2
          className={`font-display ${bgClass} text-2xl py-3 px-4 bg font-bold ${titleTextColor}`}
        >
          {title}
        </h2>
        <div className="px-4 py-3">{children}</div>
      </LinkWrap>
    </article>
  );
};

const LinkWrap = ({ children, link, linkTarget = "self" }: linkProps) => {
  if (link) {
    return (
      <Link href={link} target={`_${linkTarget}`} scroll={false}>
        {children}
      </Link>
    );
  } else {
    return <>{children}</>;
  }
};

export default Card;
