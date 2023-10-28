import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MailgoConfig } from "mailgo";
import mailgo from "mailgo";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "ui/components/Header";
import { useRouter } from "next/router";
import { Atkinson_Hyperlegible, Lexend } from "next/font/google";
import { PrefersColourSchemeDark } from "../helpers/helpers";
import Footer from "../components/Footer";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const fullConfig: any = resolveConfig(tailwindConfig);

const mailgoConfig: MailgoConfig = {
  showFooter: false,
};
const atkinson = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });
const lexend = Lexend({ weight: "400", subsets: ["latin"] });

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    mailgo({ ...mailgoConfig, dark: PrefersColourSchemeDark() });
  });

  const router = useRouter();
  return (
    <>
      <style jsx global>
        {`
          :root {
            --atkinson-font: ${atkinson.style.fontFamily};
            --lexend-font: ${lexend.style.fontFamily};
            --neon-green: ${fullConfig.theme?.colors["neon-green"]["500"]};
            --dark-green: ${fullConfig.theme?.colors["neon-green"]["900"]};
            --alto: ${fullConfig.theme?.colors.alto["500"]};
            --gondola: ${fullConfig.theme?.colors.gondola["500"]};
          }
        `}
      </style>

      <Header uiLibrary="next" />
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={handleExitComplete}
      >
        <Component {...pageProps} key={router.pathname} />;
      </AnimatePresence>
      <Footer />
    </>
  );
}
